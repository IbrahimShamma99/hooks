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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var use_state_with_history__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! use-state-with-history */ \"../../packages/usestate-with-history/dist/esm/index.js\");\n\n\nfunction App() {\n    var _a = (0,use_state_with_history__WEBPACK_IMPORTED_MODULE_1__.useStateWithHistory)(0), value = _a[0], setValue = _a[1], _b = _a[2], history = _b.history, forward = _b.forward, backward = _b.backward, go = _b.go;\n    console.log(history);\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { className: \"App\", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { onClick: function () {\n                    setValue(value + 1);\n                }, children: \"click me\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"h1\", { children: [value, \" timees\"] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { onClick: forward, children: \"forward\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { onClick: backward, children: \"backward\" }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", { onClick: function () { return go(2); }, children: \"Go\" })] }));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack://playground/./src/App.tsx?");

/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"../../node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ \"../../node_modules/react-dom/client.js\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n\n\n\nvar root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById(\"root\"));\nroot.render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}));\n\n\n//# sourceURL=webpack://playground/./src/main.tsx?");

/***/ }),

/***/ "../../packages/usestate-with-history/dist/esm/index.js":
/*!**************************************************************!*\
  !*** ../../packages/usestate-with-history/dist/esm/index.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStateWithHistory: function() { return /* binding */ useStateWithHistory; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useStateWithHistory(defaultValue) {\n    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue), value = _a[0], setValue = _a[1];\n    var historyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)([value]);\n    var pointerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);\n    var set = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (newValue) {\n        var nextValue = typeof newValue === \"function\"\n            ? newValue(value)\n            : newValue;\n        if (nextValue !== value) {\n            setValue(nextValue);\n            pointerRef.current++;\n            historyRef.current = historyRef.current.shiftWithValue(pointerRef.current, nextValue);\n        }\n    }, [value]);\n    return [\n        value,\n        set,\n        {\n            history: historyRef.current,\n            forward: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n                if (pointerRef.current === historyRef.current.length - 1) {\n                    return;\n                }\n                pointerRef.current++;\n                setValue(historyRef.current[pointerRef.current]);\n            }, []),\n            backward: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {\n                if (pointerRef.current === 0) {\n                    return;\n                }\n                pointerRef.current--;\n                setValue(historyRef.current[pointerRef.current]);\n            }, []),\n            go: (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (index) {\n                if (index < 0 ||\n                    index > historyRef.current.length - 1 ||\n                    index === pointerRef.current) {\n                    throw new Error(\"Invalid index\");\n                }\n                pointerRef.current = index;\n                setValue(historyRef.current[pointerRef.current]);\n            }, []),\n        },\n    ];\n}\n/******************************************************************************\nCopyright (c) Microsoft Corporation.\n\nPermission to use, copy, modify, and/or distribute this software for any\npurpose with or without fee is hereby granted.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH\nREGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY\nAND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,\nINDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM\nLOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR\nOTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\nPERFORMANCE OF THIS SOFTWARE.\n***************************************************************************** */\n/* global Reflect, Promise, SuppressedError, Symbol */\nfunction __spreadArray(to, from, pack) {\n    if (pack || arguments.length === 2)\n        for (var i = 0, l = from.length, ar; i < l; i++) {\n            if (ar || !(i in from)) {\n                if (!ar)\n                    ar = Array.prototype.slice.call(from, 0, i);\n                ar[i] = from[i];\n            }\n        }\n    return to.concat(ar || Array.prototype.slice.call(from));\n}\ntypeof SuppressedError === \"function\" ? SuppressedError : function (error, suppressed, message) {\n    var e = new Error(message);\n    return e.name = \"SuppressedError\", e.error = error, e.suppressed = suppressed, e;\n};\nArray.prototype.shiftWithValue = function (index, value) {\n    return __spreadArray(__spreadArray(__spreadArray([], this.slice(0, index), true), [value], false), this.slice(index, this.length), true);\n};\n\n//# sourceMappingURL=index.js.map\n\n\n//# sourceURL=webpack://playground/../../packages/usestate-with-history/dist/esm/index.js?");

/***/ })

}]);