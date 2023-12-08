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

eval("// const menu = document.querySelector('.menu')\r\n// const menuBtn = document.querySelector('.menu-btn')\r\n\r\n// menuBtn.addEventListener('click',function(){\r\n//   if(menu.style.display === \"none\"){\r\n//     menu.style.display = \"flex\"\r\n//   }else{\r\n//     menu.style.display = \"none\"\r\n//   }\r\n// })\r\n\r\n\r\nconst wrapper = document.querySelector(\".wrapper\");\r\nconst carousel = document.querySelector(\".carousel\");\r\nconst firstCardWidth = carousel.querySelector(\".card\").offsetWidth;\r\nconst arrowBtns = document.querySelectorAll(\".wrapper i\");\r\nconst carouselChildrens = [...carousel.children];\r\n\r\nlet isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;\r\n\r\n// Get the number of cards that can fit in the carousel at once\r\nlet cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);\r\n\r\n// Insert copies of the last few cards to beginning of carousel for infinite scrolling\r\ncarouselChildrens.slice(-cardPerView).reverse().forEach(card => {\r\n    carousel.insertAdjacentHTML(\"afterbegin\", card.outerHTML);\r\n});\r\n\r\n// Insert copies of the first few cards to end of carousel for infinite scrolling\r\ncarouselChildrens.slice(0, cardPerView).forEach(card => {\r\n    carousel.insertAdjacentHTML(\"beforeend\", card.outerHTML);\r\n});\r\n\r\n// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox\r\ncarousel.classList.add(\"no-transition\");\r\ncarousel.scrollLeft = carousel.offsetWidth;\r\ncarousel.classList.remove(\"no-transition\");\r\n\r\n// Add event listeners for the arrow buttons to scroll the carousel left and right\r\narrowBtns.forEach(btn => {\r\n    btn.addEventListener(\"click\", () => {\r\n        carousel.scrollLeft += btn.id == \"left\" ? -firstCardWidth : firstCardWidth;\r\n    });\r\n});\r\n\r\nconst dragStart = (e) => {\r\n    isDragging = true;\r\n    carousel.classList.add(\"dragging\");\r\n    // Records the initial cursor and scroll position of the carousel\r\n    startX = e.pageX;\r\n    startScrollLeft = carousel.scrollLeft;\r\n}\r\n\r\nconst dragging = (e) => {\r\n    if(!isDragging) return; // if isDragging is false return from here\r\n    // Updates the scroll position of the carousel based on the cursor movement\r\n    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);\r\n}\r\n\r\nconst dragStop = () => {\r\n    isDragging = false;\r\n    carousel.classList.remove(\"dragging\");\r\n}\r\n\r\nconst infiniteScroll = () => {\r\n    // If the carousel is at the beginning, scroll to the end\r\n    if(carousel.scrollLeft === 0) {\r\n        carousel.classList.add(\"no-transition\");\r\n        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);\r\n        carousel.classList.remove(\"no-transition\");\r\n    }\r\n    // If the carousel is at the end, scroll to the beginning\r\n    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {\r\n        carousel.classList.add(\"no-transition\");\r\n        carousel.scrollLeft = carousel.offsetWidth;\r\n        carousel.classList.remove(\"no-transition\");\r\n    }\r\n\r\n    // Clear existing timeout & start autoplay if mouse is not hovering over carousel\r\n    clearTimeout(timeoutId);\r\n    if(!wrapper.matches(\":hover\")) autoPlay();\r\n}\r\n\r\nconst autoPlay = () => {\r\n    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false\r\n    // Autoplay the carousel after every 2500 ms\r\n    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1500);\r\n}\r\nautoPlay();\r\n\r\ncarousel.addEventListener(\"mousedown\", dragStart);\r\ncarousel.addEventListener(\"mousemove\", dragging);\r\ndocument.addEventListener(\"mouseup\", dragStop);\r\ncarousel.addEventListener(\"scroll\", infiniteScroll);\r\nwrapper.addEventListener(\"mouseenter\", () => clearTimeout(timeoutId));\r\nwrapper.addEventListener(\"mouseleave\", autoPlay);\n\n//# sourceURL=webpack://learn-js/./src/index.js?");

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