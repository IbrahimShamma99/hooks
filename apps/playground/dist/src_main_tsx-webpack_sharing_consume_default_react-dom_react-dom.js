"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkplayground"] = self["webpackChunkplayground"] || []).push([["src_main_tsx-webpack_sharing_consume_default_react-dom_react-dom"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'use-state-with-history'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nfunction App() {\n    var _a = Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'use-state-with-history'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(0), value = _a[0], setValue = _a[1], _b = _a[2], history = _b.history, forward = _b.forward, backward = _b.backward, go = _b.go;\n    console.log(history);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"App\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { onClick: function () {\n                    setValue(value + 1);\n                }, children: \"click me\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", { children: [value, \" timees\"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { onClick: forward, children: \"forward\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { onClick: backward, children: \"backward\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { onClick: function () { return go(2); }, children: \"Go\" })] }));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack://playground/./src/App.tsx?");

/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"../../node_modules/react-dom/client.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n\n\n\nvar root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById(\"root\"));\nroot.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}));\n\n\n//# sourceURL=webpack://playground/./src/main.tsx?");

/***/ })

}]);