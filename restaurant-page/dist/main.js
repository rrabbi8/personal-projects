/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   about: () => (/* binding */ about)\n/* harmony export */ });\nconst about = () => {\n\tconst aboutDiv = document.createElement(\"div\");\n\taboutDiv.id = \"about\";\n\tcontent.appendChild(aboutDiv);\n\n\tconst aboutHeader = document.createElement(\"p\");\n\taboutHeader.id = \"about-header\";\n\taboutHeader.textContent = \"About\";\n\taboutDiv.appendChild(aboutHeader);\n\n\tconst aboutText = document.createElement(\"p\");\n\taboutText.id = \"about-text\";\n\taboutText.textContent =\n\t\t\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, leo non maximus auctor, arcu metus pellentesque lorem, in auctor dui enim sed ex. Integer rhoncus massa vitae arcu tempor aliquam. Nam sagittis, lorem at elementum pulvinar, lacus sem ultrices risus, vel eleifend dolor libero eu orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla sed porta sapien. Nullam cursus hendrerit nulla ac viverra. Proin feugiat porttitor tortor, non venenatis erat rutrum dignissim. Aliquam erat volutpat. Duis imperdiet elementum nunc, quis accumsan ligula commodo eu. Nunc non commodo odio, et lobortis purus. Ut nisi elit, sagittis nec justo et, cursus rutrum ante. Suspendisse tristique enim ut ante finibus malesuada. Nunc at lorem urna. Sed nec dui mi. Integer sit amet libero id ex dignissim bibendum nec nec elit.\";\n\taboutDiv.appendChild(aboutText);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   app: () => (/* binding */ app)\n/* harmony export */ });\nconst app = (() => {\n\tconst makeNav = () => {\n\t\tconst nav = document.createElement(\"div\");\n\t\tnav.id = \"nav-bar\";\n\t\tcontent.appendChild(nav);\n\n\t\tconst leftNav = document.createElement(\"div\");\n\t\tleftNav.id = \"left-nav\";\n\t\tnav.appendChild(leftNav);\n\n\t\tconst logo = document.createElement(\"img\");\n\t\tlogo.src = \"assests/clipart1382579.png\";\n\t\tlogo.id = \"ant-img\";\n\t\tleftNav.appendChild(logo);\n\n\t\tconst rightNav = document.createElement(\"div\");\n\t\trightNav.id = \"right-nav\";\n\t\tnav.appendChild(rightNav);\n\n\t\tconst about = document.createElement(\"button\");\n\t\tabout.classList.add(\"nav-button\");\n\t\tabout.textContent = \"About\";\n\t\trightNav.appendChild(about);\n\n\t\tconst menu = document.createElement(\"button\");\n\t\tmenu.classList.add(\"nav-button\");\n\t\tmenu.textContent = \"Menu\";\n\t\trightNav.appendChild(menu);\n\n\t\tconst contact = document.createElement(\"button\");\n\t\tcontact.classList.add(\"nav-button\");\n\t\tcontact.textContent = \"Contact\";\n\t\trightNav.appendChild(contact);\n\t};\n\n\tconst clear = () => {\n\t\twhile (content.lastChild) content.removeChild(content.lastChild);\n\t};\n\treturn { clear, makeNav };\n})();\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/app.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = () => {\n\tconst content = document.querySelector(\"#content\");\n\tconst contactDiv = document.createElement(\"div\");\n\tconst contactHeader = document.createElement(\"h1\");\n\tconst contactP = document.createElement(\"p\");\n\n\tcontactDiv.id = \"contact-div\";\n\tcontactHeader.id = \"contact-header\";\n\tcontactP.id = \"contact-para\";\n\n\tcontactHeader.textContent = \"Questions?\";\n\tcontactP.textContent =\n\t\t\"Unfortunately this cafe does not exist so there is no way to get in contact.\";\n\n\tcontent.appendChild(contactDiv);\n\tcontactDiv.appendChild(contactHeader);\n\tcontactDiv.appendChild(contactP);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ \"./src/app.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n\n\n\n\n\nconst content = document.querySelector(\"content\");\n\n_app__WEBPACK_IMPORTED_MODULE_0__.app.makeNav();\n(0,_about__WEBPACK_IMPORTED_MODULE_3__.about)();\n\nconst changeTab = (e) => {\n\t_app__WEBPACK_IMPORTED_MODULE_0__.app.clear();\n\t_app__WEBPACK_IMPORTED_MODULE_0__.app.makeNav();\n\tlisteners();\n\tswitch (e.target.textContent) {\n\t\tcase \"About\":\n\t\t\t(0,_about__WEBPACK_IMPORTED_MODULE_3__.about)();\n\t\t\tbreak;\n\t\tcase \"Menu\":\n\t\t\t(0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)();\n\t\t\tbreak;\n\t\tcase \"Contact\":\n\t\t\t(0,_contact__WEBPACK_IMPORTED_MODULE_1__.contact)();\n\t\t\tbreak;\n\t}\n};\n\nconst listeners = () => {\n\tconst btns = document.querySelectorAll(\"button\");\n\n\tbtns.forEach((button) => {\n\t\tbutton.addEventListener(\"click\", changeTab);\n\t});\n};\n\nlisteners();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menu: () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n\tconst content = document.querySelector(\"#content\");\n\tconst menuDiv = document.createElement(\"div\");\n\tmenuDiv.id = \"menu\";\n\tcontent.appendChild(menuDiv);\n\n\tconst makeMenuItem = (img, description) => {\n\t\tconst menuItem = document.createElement(\"div\");\n\t\tconst menuImg = document.createElement(\"img\");\n\t\tconst menuP = document.createElement(\"p\");\n\n\t\tmenuItem.classList.add(\"menu-item\");\n\t\tmenuImg.classList.add(\"menu-img\");\n\t\tmenuP.classList.add(\"menu-description\");\n\n\t\tmenuImg.src = img;\n\t\tmenuP.textContent = description;\n\n\t\tmenuDiv.appendChild(menuItem);\n\t\tmenuItem.appendChild(menuImg);\n\t\tmenuItem.appendChild(menuP);\n\t};\n\n\tmakeMenuItem(\"assests/clipart24466.png\", \"Watermelon\");\n\tmakeMenuItem(\"assests/clipart1630349.png\", \"Leaf\");\n\tmakeMenuItem(\"assests/clipart717782.png\", \"Egg\");\n\tmakeMenuItem(\"assests/clipart48267.png\", \"Dog\");\n\tmakeMenuItem(\"assests/clipart1859290.png\", \"Fries\");\n\tmakeMenuItem(\"assests/clipart767518.png\", \"Candy\");\n};\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;