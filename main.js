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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContactPage() {\r\n  const content = document.getElementById('content');\r\n  const contactDiv = document.createElement('div');\r\n  contactDiv.classList.add('contact');\r\n\r\n  const heading = document.createElement('h1');\r\n  heading.textContent = \"Contact Us\";\r\n\r\n  const phone = document.createElement('p');\r\n  phone.textContent = \"📞 Phone: +90 555 123 4567\";\r\n\r\n  const address = document.createElement('p');\r\n  address.textContent = \"📍 Address: Flame Street No. 42, Istanbul\";\r\n\r\n  contactDiv.appendChild(heading);\r\n  contactDiv.appendChild(phone);\r\n  contactDiv.appendChild(address);\r\n\r\n  content.appendChild(contactDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);\r\n\n\n//# sourceURL=webpack://theodin-restaurantpage/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHomePage() {\r\n  const content = document.getElementById('content');\r\n\r\n  const homeDiv = document.createElement('div');\r\n  homeDiv.classList.add('home');\r\n\r\n  const heading = document.createElement('h1');\r\n  heading.textContent = \"Welcome to Arda's Flame Kitchen\";\r\n\r\n  const image = document.createElement('img');\r\n  image.src = 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092';\r\n  image.alt = 'Delicious food';\r\n  image.width = 400;\r\n\r\n  const paragraph = document.createElement('p');\r\n  paragraph.textContent = \"Experience the taste of tradition and innovation at Arda's Flame Kitchen.\";\r\n\r\n  homeDiv.appendChild(heading);\r\n  homeDiv.appendChild(image);\r\n  homeDiv.appendChild(paragraph);\r\n\r\n  content.appendChild(homeDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHomePage);\r\n\n\n//# sourceURL=webpack://theodin-restaurantpage/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nconsole.log(\"Webpack Dev Server is running!\");\r\n\r\n// Utility function to clear content\r\nfunction clearContent() {\r\n  const content = document.getElementById('content');\r\n  content.innerHTML = '';\r\n}\r\n\r\n// Tab switch logic\r\nfunction addNavEvents() {\r\n  document.getElementById('home-btn').addEventListener('click', () => {\r\n    clearContent();\r\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  });\r\n\r\n  document.getElementById('menu-btn').addEventListener('click', () => {\r\n    clearContent();\r\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  });\r\n\r\n  document.getElementById('contact-btn').addEventListener('click', () => {\r\n    clearContent();\r\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  });\r\n}\r\n\r\n// Initial page load\r\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\naddNavEvents();\r\n\n\n//# sourceURL=webpack://theodin-restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenuPage() {\r\n  const content = document.getElementById('content');\r\n  const menuDiv = document.createElement('div');\r\n  menuDiv.classList.add('menu');\r\n\r\n  const heading = document.createElement('h1');\r\n  heading.textContent = \"Our Menu\";\r\n\r\n  const item1 = document.createElement('p');\r\n  item1.textContent = \"🔥 Spicy Chicken Wings - 12.99₺\";\r\n\r\n  const item2 = document.createElement('p');\r\n  item2.textContent = \"🍝 Creamy Mushroom Pasta - 18.50₺\";\r\n\r\n  menuDiv.appendChild(heading);\r\n  menuDiv.appendChild(item1);\r\n  menuDiv.appendChild(item2);\r\n\r\n  content.appendChild(menuDiv);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenuPage);\r\n\n\n//# sourceURL=webpack://theodin-restaurantpage/./src/menu.js?");

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