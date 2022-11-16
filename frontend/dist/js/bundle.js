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

eval("//console.log(require('../../deneme'))\n//console.log(\"Merhabalar webpack nasılsın\")\n\n//babel\nvar data1 = \"babel merhabalar\";\nconsole.log(data1);\nvar data2 = \"babel merhabalar\";\nconsole.log(data2);\nvar helloWorld = function helloWorld() {\n  console.log(\"merhabalar arrow function\");\n};\nhelloWorld();\n\n// CORS\n$(document).ready(function () {\n  var URL = \"http://localhost:9090/api/v1/cors\";\n  $.get(URL, function (data, status) {\n    console.log(data);\n    $(\"#cors_id\").html(\"<br>\" + data + \"</br>\");\n  }); //end  $.get\n});\n\n// login :\n$(function () {\n  $(\"#submit_id\").on(\"click\", function () {\n    var userEmail, userPassword;\n    //email\n    //password\n  });\n});\n\n//login register\n//registerId  registerModal\n$(document).ready(function () {\n  $(\"#basic-form\").validate({\n    errorClass: \"error fail-alert\",\n    validClass: \"valid success-alert\",\n    rules: {\n      name: {\n        required: true,\n        minlength: 3\n      },\n      password: {\n        required: true\n        //number: true,\n        //min: 8,\n        //password: true,\n      },\n\n      email: {\n        required: true,\n        email: true\n      }\n    },\n    messages: {\n      name: {\n        minlength: \"Minumum 3 karakter giriniz\",\n        required: \"Ad alanı boş geçemezsiniz\"\n      },\n      password: {\n        required: \"Şifre  alanını boş geçemezsiniz\"\n        //number: \"Lütfen sayısal değer giriniz\",\n        //min: \"şifre için en az 8 karakter olmalı\",\n      },\n\n      email: {\n        required: \"Email alanını boş geçemezsiniz\",\n        email: \"Email formatında girmediniz örneğin: xyz@deneme.com\"\n      }\n    }\n  });\n});\n\n//# sourceURL=webpack://frontend/./src/js/index.js?");

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