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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (() => {

eval("//console.log(require('../../deneme'))\n//console.log(\"Merhabalar webpack nasılsın\")\n\n//babel\nvar data1 = \"babel merhabalar\";\nconsole.log(data1);\nvar data2 = \"babel merhabalar\";\nconsole.log(data2);\nvar helloWorld = function helloWorld() {\n  console.log(\"merhabalar arrow function\");\n};\nhelloWorld();\n$(document).ready(function () {\n  var URL = \"http://localhost:9090/api/v1/cors\";\n  $.get(URL, function (data, status) {\n    console.log(data);\n    $(\"#cors_id\").html(\"<br>\" + data + \"</br>\");\n  }); //end  $.get\n});\n\n//# sourceURL=webpack://frontend/./src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/index.js"]();
/******/ 	
/******/ })()
;