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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _javascriptJoke__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./javascriptJoke */ \"./src/javascriptJoke.js\");\n/* harmony import */ var _myName__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./myName */ \"./src/myName.js\");\n\r\n\r\n\r\n\r\nconsole.log((0,_javascriptJoke__WEBPACK_IMPORTED_MODULE_0__[\"default\"])())\r\n\r\nfunction component(){\r\n  const element = document.createElement('div')\r\n\r\n  element.textContent = (0,_myName__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('ido')\r\n  return element\r\n}\r\n\r\ndocument.body.appendChild(component())\r\n\r\nconsole.log((0,_myName__WEBPACK_IMPORTED_MODULE_1__.functionOne)())\r\nconsole.log((0,_myName__WEBPACK_IMPORTED_MODULE_1__.functionTwo)())\r\n\r\n\r\n\n\n//# sourceURL=webpack://learn-js/./src/index.js?");

/***/ }),

/***/ "./src/javascriptJoke.js":
/*!*******************************!*\
  !*** ./src/javascriptJoke.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction joke(){\r\n  return \"ido sabah\"\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (joke);\n\n//# sourceURL=webpack://learn-js/./src/javascriptJoke.js?");

/***/ }),

/***/ "./src/myName.js":
/*!***********************!*\
  !*** ./src/myName.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   functionOne: () => (/* binding */ functionOne),\n/* harmony export */   functionTwo: () => (/* binding */ functionTwo)\n/* harmony export */ });\nconst myName = (name) => 'hi! my name is' + \" \" + name;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (myName);\r\n\r\n// a file called myModule.js\r\nconst functionOne = () => 'ONE';\r\nconst functionTwo = () => 'TWO';\r\n\r\n\n\n//# sourceURL=webpack://learn-js/./src/myName.js?");

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