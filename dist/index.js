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

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar canvas = document.getElementById(\"renderCanvas\");\nvar engine = new Engine(canvas, true);\nfunction createScene() {\n    var scene = new Scene(engine);\n    var camera = new ArcRotateCamera(\"Camera\", Math.PI / 2, Math.PI / 2, 2, Vector3.Zero(), scene);\n    camera.attachControl(canvas, true);\n    var light1 = new HemisphericLight(\"light1\", new Vector3(1, 1, 0), scene);\n    var sphere = MeshBuilder.CreateSphere(\"sphere\", { diameter: 1 }, scene);\n    return scene;\n}\nvar scene = createScene();\nengine.runRenderLoop(function () {\n    scene.render();\n});\n\n\n//# sourceURL=webpack:///./index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;