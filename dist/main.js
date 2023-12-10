/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// const email = document.getElementById(\"email\");\r\n\r\n// email.addEventListener(\"input\", (event) => {\r\n//   if (email.validity.typeMismatch) {\r\n//     email.setCustomValidity(\"I am expecting an email address!\");\r\n//   } else {\r\n//     email.setCustomValidity(\"\");\r\n//   }\r\n// });\r\nconst city = 'Israel';\r\nconst apiKey = 'd63972b3d5c94796b4f164912231012';\r\nconst apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&appid=${apiKey}`;\r\n\r\nconst getDate = async () => {\r\n  try {\r\n    const response = await fetch(apiUrl);\r\n\r\n    if (!response.ok) {\r\n      throw new Error(`HTTP error! Status: ${response.status}`);\r\n    }\r\n\r\n    const data = await response.json();\r\n    console.log(data);\r\n  } catch (error) {\r\n    console.log('Error fetching data:', error.message);\r\n  }\r\n};\r\n\r\ngetDate();\r\n\r\n\n\n//# sourceURL=webpack://learn-js/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;