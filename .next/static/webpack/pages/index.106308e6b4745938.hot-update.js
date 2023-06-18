"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/home/Navigation.tsx":
/*!****************************************!*\
  !*** ./components/home/Navigation.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst navTabs = [\n    {\n        text: \"About Me\",\n        key: \"AboutMe.tsx\"\n    },\n    {\n        text: \"Published Content\",\n        key: \"PublishedContent.tsx\"\n    },\n    {\n        text: \"Work With Me\",\n        key: \"WorkWithMe.tsx\"\n    }\n];\nconst Navigation = (param)=>{\n    let { activeTabKey , setActiveTabKey , handleTabChange  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"hidden lg:flex\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex flex-col gap-2 text-xl items-start\",\n            children: navTabs.map((navTab)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                    className: \"\\n                  duration-200 transition-all hover:text-orange-600 hover:cursor-pointer hover:translate-x-0.5\\n                  \".concat(activeTabKey === navTab.key && \"text-orange-500 translate-x-1\", \"\\n                \"),\n                    onClick: handleTabChange,\n                    children: navTab.text\n                }, void 0, false, {\n                    fileName: \"E:\\\\workspace\\\\lewisbroadhurstdev-website\\\\components\\\\home\\\\Navigation.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 15\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"E:\\\\workspace\\\\lewisbroadhurstdev-website\\\\components\\\\home\\\\Navigation.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"E:\\\\workspace\\\\lewisbroadhurstdev-website\\\\components\\\\home\\\\Navigation.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvTmF2aWdhdGlvbi50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ2tDO0FBUWxDLE1BQU1DLFVBQTJCO0lBQy9CO1FBQUNDLE1BQU07UUFBWUMsS0FBSztJQUFhO0lBQ3JDO1FBQUNELE1BQU07UUFBcUJDLEtBQUs7SUFBc0I7SUFDdkQ7UUFBQ0QsTUFBSztRQUFnQkMsS0FBSztJQUFnQjtDQUM1QztBQUVELE1BQU1DLGFBQTJCLFNBSTNCO1FBSjRCLEVBQ2hDQyxhQUFZLEVBQ1pDLGdCQUFlLEVBQ2ZDLGdCQUFlLEVBQ2hCO0lBRUMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNDO1lBQUdELFdBQVU7c0JBRVZSLFFBQVFVLEdBQUcsQ0FBQ0MsQ0FBQUEsdUJBQ1YsOERBQUNDO29CQUNDSixXQUFXLHVJQUV5RCxPQUEvREosaUJBQWlCTyxPQUFPVCxHQUFHLElBQUksaUNBQWdDO29CQUVwRVcsU0FBU1A7OEJBRVJLLE9BQU9WLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUI7S0F6Qk1FO0FBMkJOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZS9OYXZpZ2F0aW9uLnRzeD84MzQxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdmlnYXRpb25UYWIgfSBmcm9tICdAL3R5cGVzL0hvbWVUeXBlcyc7XHJcbmltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gJ3JlYWN0JztcclxuXHJcbnR5cGUgT3duUHJvcHMgPSB7XHJcbiAgYWN0aXZlVGFiS2V5OiBzdHJpbmc7XHJcbiAgc2V0QWN0aXZlVGFiS2V5OiAoKSA9PiB2b2lkO1xyXG4gIGhhbmRsZVRhYkNoYW5nZTogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmNvbnN0IG5hdlRhYnM6IE5hdmlnYXRpb25UYWJbXSA9IFtcclxuICB7dGV4dDogJ0Fib3V0IE1lJywga2V5OiAnQWJvdXRNZS50c3gnfSwgXHJcbiAge3RleHQ6ICdQdWJsaXNoZWQgQ29udGVudCcsIGtleTogJ1B1Ymxpc2hlZENvbnRlbnQudHN4J30sIFxyXG4gIHt0ZXh0OidXb3JrIFdpdGggTWUnLCBrZXk6ICdXb3JrV2l0aE1lLnRzeCd9XHJcbl07XHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uOiBGQzxPd25Qcm9wcz4gPSAoe1xyXG4gIGFjdGl2ZVRhYktleSxcclxuICBzZXRBY3RpdmVUYWJLZXksXHJcbiAgaGFuZGxlVGFiQ2hhbmdlXHJcbn0pID0+IHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPSdoaWRkZW4gbGc6ZmxleCc+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtMiB0ZXh0LXhsIGl0ZW1zLXN0YXJ0Jz5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmF2VGFicy5tYXAobmF2VGFiID0+IFxyXG4gICAgICAgICAgICAgIDxsaSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICBkdXJhdGlvbi0yMDAgdHJhbnNpdGlvbi1hbGwgaG92ZXI6dGV4dC1vcmFuZ2UtNjAwIGhvdmVyOmN1cnNvci1wb2ludGVyIGhvdmVyOnRyYW5zbGF0ZS14LTAuNVxyXG4gICAgICAgICAgICAgICAgICAkeyBhY3RpdmVUYWJLZXkgPT09IG5hdlRhYi5rZXkgJiYgJ3RleHQtb3JhbmdlLTUwMCB0cmFuc2xhdGUteC0xJ31cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUYWJDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge25hdlRhYi50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9uYXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uIl0sIm5hbWVzIjpbIlJlYWN0IiwibmF2VGFicyIsInRleHQiLCJrZXkiLCJOYXZpZ2F0aW9uIiwiYWN0aXZlVGFiS2V5Iiwic2V0QWN0aXZlVGFiS2V5IiwiaGFuZGxlVGFiQ2hhbmdlIiwibmF2IiwiY2xhc3NOYW1lIiwidWwiLCJtYXAiLCJuYXZUYWIiLCJsaSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/Navigation.tsx\n"));

/***/ })

});