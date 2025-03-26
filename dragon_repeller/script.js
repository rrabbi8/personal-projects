let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"];

// initialize elements
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

// initialize objects
const weapons = [
	{
		name: "stick",
		power: 5,
	},
	{
		name: "dagger",
		power: 30,
	},
	{
		name: "claw hammer",
		power: 50,
	},
	{
		name: "sword",
		power: 100,
	},
];
const monsters = [
	{
		name: "slime",
		level: 2,
		health: 15,
	},
	{
		name: "fanged beast",
		level: 8,
		health: 60,
	},
	{
		name: "dragon",
		level: 20,
		health: 300,
	},
];
const locations = [
	{
		name: "town square",
		"button text": ["Go to Store", "Go to cave", "Fight Dragon"],
		"button functions": [goStore, goCave, fightDragon],
		text: 'You are in the town sqaure. You see a sign that says "Store".',
	},
	{
		name: "Store",
		"button text": [
			"Buy 10 health (10 Gold)",
			"Buy weapon (30 Gold)",
			"Go to town square",
		],
		"button functions": [buyHealth, buyWeapon, goTown],
		text: "You have entered the store.",
	},
	{
		name: "Cave",
		"button text": [
			"Fight slime",
			"Fight fanged beast",
			"Go to town square",
		],
		"button functions": [fightSlime, fightBeast, goTown],
		text: "You entered the cave. You see some monsters.",
	},
	{
		name: "Fight",
		"button text": ["Attack", "Dodge", "Run"],
		"button functions": [attack, dodge, goTown],
		text: "You are fighting a monster.",
	},
	{
		name: "Killed Monster",
		"button text": [
			"Go to town square ",
			"Go to town square",
			"Go to town square",
		],
		"button functions": [goTown, goTown, goTown],
		text: 'The monster screams "Arg!" as it dies. You gain experience and find gold.',
	},
	{
		name: "lose",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "You die. 💀",
	},
	{
		name: "win",
		"button text": ["REPLAY?", "REPLAY?", "REPLAY?"],
		"button functions": [restart, restart, restart],
		text: "You defeat the dragon. YOU WIN THE GAME!!!",
	},
];

// initialise buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

// functions
function update(location) {
	monsterStats.style.display = "none";
	button1.innerText = location["button text"][0];
	button2.innerText = location["button text"][1];
	button3.innerText = location["button text"][2];
	button1.onclick = location["button functions"][0];
	button2.onclick = location["button functions"][1];
	button3.onclick = location["button functions"][2];

	text.innerText = location.text;
}
function goTown() {
	update(locations[0]);
}
function goStore() {
	update(locations[1]);
}
function goCave() {
	update(locations[2]);
}

function buyHealth() {
	if (gold >= 10) {
		gold -= 10;
		health += 10;
		goldText.innerText = gold;
		healthText.innerText = health;
	} else {
		text.innerText = "You do not have enough gold to buy health.";
	}
}
function buyWeapon() {
	if (currentWeapon < weapons.length - 1) {
		if (gold >= 30) {
			gold -= 30;
			currentWeapon++;

			goldText.innerText = gold;
			let newWeapon = weapons[currentWeapon].name;
			text.innerText = "You now have a " + newWeapon + ".";
			inventory.push(newWeapon);
			text.innerText += "\nIn your inventory you have: " + inventory;
		} else {
			text.innerText = "You do not have enough gold to buy new weapon.";
		}
	} else {
		text.innerText = "You already have the most powerful weapon.";
		button2.innerText = "Sell weapon for 15 gold";
		button2.onclick = sellWeapon;
	}
}
function sellWeapon() {
	if (inventory.length > 1) {
		gold += 15;
		goldText.innerText = gold;
		let currentWeapon = inventory.shift();
		text.innerText = "You sold a " + currentWeapon + ".";
		text.innerText += "\nIn your inventory you have: " + inventory;
	} else {
		text.innerText = "Don't sell your only weapon!";
	}
}

// monster functions
function fightSlime() {
	fighting = 0;
	goFight();
}
function fightBeast() {
	fighting = 1;
	goFight();
}
function fightDragon() {
	fighting = 2;
	goFight();
}

function goFight() {
	update(locations[3]);
	monsterHealth = monsters[fighting].health;
	monsterStats.style.display = "block";
	monsterNameText.innerText = monsters[fighting].name;
	monsterHealthText.innerText = monsterHealth;
}
function attack() {
	text.innerText = "The " + monsters[fighting].name + " attacks.";
	text.innerText +=
		" You attack it with your " + weapons[currentWeapon].name + ".";

	if (isMonsterHit()) {
		health -= getMonsterAttackValue(monsters[fighting].level);
	} else {
		text.innerText += "You miss.";
	}

	monsterHealth -=
		weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;

	healthText.innerText = health;
	monsterHealthText.innerText = monsterHealth;

	if (health <= 0) {
		health = 0;
		lose();
	} else if (monsterHealth <= 0) {
		fighting === 2 ? winGame() : defeatMonster();
	}

	if (Math.random() <= 0.1 && inventory.length !== 1) {
		text.innerText += "Your " + inventory.pop() + " breaks.";
		currentWeapon--;
	}
}
function getMonsterAttackValue(level) {
	let hit = level * 5 - Math.floor(Math.random() * xp);
	console.log(hit);
	return hit;
}
function isMonsterHit() {
	return Math.random() > 0.2 || health < 20;
}
function dodge() {
	text.innerText =
		"You dodge the attack from the " + monsters[fighting].name + ".";
}

// game functions
function lose() {
	update(locations[5]);
}
function winGame() {
	update(locations[6]);
}
function defeatMonster() {
	gold += Math.floor(monsters[fighting].level * 6.7);
	xp += monsters[fighting].level;
	goldText.innerText = gold;
	xpText.innerText = xp;
	update(locations[4]);
}

function restart() {
	xp = 0;
	health = 100;
	gold = 50;
	currentWeapon = 0;
	fighting;
	monsterHealth;
	inventory = ["stick"];
	xpText.innerText = xp;
	healthText.innerText = health;
	goldText.innerText = gold;
	goTown();
}
function winGame() {}
