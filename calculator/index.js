let operator = "";
let previous = "";
let current = "";

document.addEventListener("DOMContentLoaded", function () {
	//store all components on HTML in JS

	let clear = document.querySelector(".clear-btn");
	let equal = document.querySelector(".equal");
	let decimal = document.querySelector(".decimal");

	let numbers = document.querySelectorAll(".number");
	let operators = document.querySelectorAll(".operator");

	let prevScreen = document.querySelector(".previous");
	let currScreen = document.querySelector(".current");

	numbers.forEach((number) =>
		number.addEventListener("click", function (e) {
			handleNumber(e.target.textContent);
			currScreen.textContent = current;
		})
	);

	operators.forEach((op) =>
		op.addEventListener("click", function (e) {
			handleOperator(e.target.textContent);
			prevScreen.textContent = previous + " " + operator;
			currScreen.textContent = current;
		})
	);

	clear.addEventListener("click", function () {
		prevScreen.textContent = "";
		currScreen.textContent = "";
		previous = "";
		current = "";
		operator = "";
	});

	equal.addEventListener("click", function () {
		if (current != "" && previous != "") {
			calculate();
			prevScreen.textContent = "";
			if (current.length <= 5) {
				currScreen.textContent = current;
			} else {
				currScreen.textContent = current.slice(0, 5) + "...";
			}
		}
	});

	decimal.addEventListener("click", function () {
		addDecimal();
		currScreen.textContent = current;
	});
});

function handleNumber(num) {
	if (current.length <= 5) {
		current += num;
	}
}

function handleOperator(op) {
	operator = op;
	previous = current;
	current = "";
}

function calculate() {
	previous = Number(previous);
	current = Number(current);

	switch (operator) {
		case "+":
			previous += current;
			break;
		case "-":
			previous -= current;
			break;
		case "x":
			previous *= current;
			break;
		case "/":
			previous /= current;
			break;
	}

	previous = roundNumber(previous);
	previous = previous.toString();
	current = previous;
}

function roundNumber(num) {
	return Math.round(num * 1000) / 1000;
}

function addDecimal() {
	if (!current.includes(".")) {
		current += ".";
	}
}
