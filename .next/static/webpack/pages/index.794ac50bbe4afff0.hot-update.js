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

/***/ "./components/Selector.js":
/*!********************************!*\
  !*** ./components/Selector.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/saleToken */ \"./utils/saleToken.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Selector = (param)=>{\n    let { defaultValue, ignoreValue, setToken, id } = param;\n    _s();\n    const menu = [\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.Eth,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.Eth\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.USDT,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.USDT\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.BNB,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.BNB\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.USD,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.USD\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.STETH,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.STETH\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.TRON,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.TRON\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.MATIC,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.MATIC\n        },\n        {\n            key: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.SHIBA,\n            name: _utils_saleToken__WEBPACK_IMPORTED_MODULE_2__.SHIBA\n        }\n    ];\n    const [selectedItem, setSelectedItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [menuItems, setMenuItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getFilteredItems(ignoreValue));\n    const getFilteredItems = (ignoreValue)=>{\n        return menu.filter((item)=>item[\"key\"] != ignoreValue);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setSelectedItem(defaultValue);\n    }, [\n        defaultValue\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setMenuItems(getFilteredItems(ignoreValue));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Selector\"\n    }, void 0, false, {\n        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\Selector.js\",\n        lineNumber: 43,\n        columnNumber: 10\n    }, undefined);\n};\n_s(Selector, \"jUm5IBZDHtJ6jbFNdVIlg0pYrGY=\");\n_c = Selector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Selector);\nvar _c;\n$RefreshReg$(_c, \"Selector\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1NlbGVjdG9yLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQW1EO0FBQ047QUFZbEI7QUFFM0IsTUFBTWMsV0FBVztRQUFDLEVBQUVDLFlBQVksRUFBRUMsV0FBVyxFQUFFQyxRQUFRLEVBQUVDLEVBQUUsRUFBRTs7SUFDM0QsTUFBTUMsT0FBTztRQUNYO1lBQUVDLEtBQUtoQixpREFBR0E7WUFBRWlCLE1BQU1qQixpREFBR0E7UUFBQztRQUN0QjtZQUFFZ0IsS0FBS2Ysa0RBQUlBO1lBQUVnQixNQUFNaEIsa0RBQUlBO1FBQUM7UUFDeEI7WUFBRWUsS0FBS2QsaURBQUdBO1lBQUVlLE1BQU1mLGlEQUFHQTtRQUFDO1FBQ3RCO1lBQUVjLEtBQUtiLGlEQUFHQTtZQUFFYyxNQUFNZCxpREFBR0E7UUFBQztRQUN0QjtZQUFFYSxLQUFLWixtREFBS0E7WUFBRWEsTUFBTWIsbURBQUtBO1FBQUM7UUFDMUI7WUFBRVksS0FBS1gsa0RBQUlBO1lBQUVZLE1BQU1aLGtEQUFJQTtRQUFDO1FBQ3hCO1lBQUVXLEtBQUtWLG1EQUFLQTtZQUFFVyxNQUFNWCxtREFBS0E7UUFBQztRQUMxQjtZQUFFVSxLQUFLVCxtREFBS0E7WUFBRVUsTUFBTVYsbURBQUtBO1FBQUM7S0FDM0I7SUFFRCxNQUFNLENBQUNXLGNBQWNDLGdCQUFnQixHQUFHdEIsK0NBQVFBO0lBQ2hELE1BQU0sQ0FBQ3VCLFdBQVdDLGFBQWEsR0FBR3hCLCtDQUFRQSxDQUFDeUIsaUJBQWlCVjtJQUU1RCxNQUFNVSxtQkFBbUIsQ0FBQ1Y7UUFDeEIsT0FBT0csS0FBS1EsTUFBTSxDQUFDLENBQUNDLE9BQVNBLElBQUksQ0FBQyxNQUFNLElBQUlaO0lBQzlDO0lBRUFkLGdEQUFTQSxDQUFDO1FBQ1JxQixnQkFBZ0JSO0lBQ2xCLEdBQUc7UUFBQ0E7S0FBYTtJQUVqQmIsZ0RBQVNBLENBQUM7UUFDUnVCLGFBQWFDLGlCQUFpQlY7SUFDaEMsR0FBRyxFQUFFO0lBRUwscUJBQU8sOERBQUNhO2tCQUFJOzs7Ozs7QUFDZDtHQTVCTWY7S0FBQUE7QUE4Qk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TZWxlY3Rvci5qcz83NzVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgRXRoLFxyXG4gIFVTRFQsXHJcbiAgQk5CLFxyXG4gIFVTRCxcclxuICBTVEVUSCxcclxuICBUUk9OLFxyXG4gIE1BVElDLFxyXG4gIFNISUJBLFxyXG4gIFVOSVNXQVAsXHJcbiAgREVGQVVMVF9WQUxVRSxcclxufSBmcm9tIFwiQC91dGlscy9zYWxlVG9rZW5cIjtcclxuXHJcbmNvbnN0IFNlbGVjdG9yID0gKHsgZGVmYXVsdFZhbHVlLCBpZ25vcmVWYWx1ZSwgc2V0VG9rZW4sIGlkIH0pID0+IHtcclxuICBjb25zdCBtZW51ID0gW1xyXG4gICAgeyBrZXk6IEV0aCwgbmFtZTogRXRoIH0sXHJcbiAgICB7IGtleTogVVNEVCwgbmFtZTogVVNEVCB9LFxyXG4gICAgeyBrZXk6IEJOQiwgbmFtZTogQk5CIH0sXHJcbiAgICB7IGtleTogVVNELCBuYW1lOiBVU0QgfSxcclxuICAgIHsga2V5OiBTVEVUSCwgbmFtZTogU1RFVEggfSxcclxuICAgIHsga2V5OiBUUk9OLCBuYW1lOiBUUk9OIH0sXHJcbiAgICB7IGtleTogTUFUSUMsIG5hbWU6IE1BVElDIH0sXHJcbiAgICB7IGtleTogU0hJQkEsIG5hbWU6IFNISUJBIH0sXHJcbiAgXTtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkSXRlbSwgc2V0U2VsZWN0ZWRJdGVtXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21lbnVJdGVtcywgc2V0TWVudUl0ZW1zXSA9IHVzZVN0YXRlKGdldEZpbHRlcmVkSXRlbXMoaWdub3JlVmFsdWUpKTtcclxuXHJcbiAgY29uc3QgZ2V0RmlsdGVyZWRJdGVtcyA9IChpZ25vcmVWYWx1ZSkgPT4ge1xyXG4gICAgcmV0dXJuIG1lbnUuZmlsdGVyKChpdGVtKSA9PiBpdGVtW1wia2V5XCJdICE9IGlnbm9yZVZhbHVlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRJdGVtKGRlZmF1bHRWYWx1ZSk7XHJcbiAgfSwgW2RlZmF1bHRWYWx1ZV0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0TWVudUl0ZW1zKGdldEZpbHRlcmVkSXRlbXMoaWdub3JlVmFsdWUpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiA8ZGl2PlNlbGVjdG9yPC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0b3I7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiRHJvcGRvd24iLCJFdGgiLCJVU0RUIiwiQk5CIiwiVVNEIiwiU1RFVEgiLCJUUk9OIiwiTUFUSUMiLCJTSElCQSIsIlVOSVNXQVAiLCJERUZBVUxUX1ZBTFVFIiwiU2VsZWN0b3IiLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsInNldFRva2VuIiwiaWQiLCJtZW51Iiwia2V5IiwibmFtZSIsInNlbGVjdGVkSXRlbSIsInNldFNlbGVjdGVkSXRlbSIsIm1lbnVJdGVtcyIsInNldE1lbnVJdGVtcyIsImdldEZpbHRlcmVkSXRlbXMiLCJmaWx0ZXIiLCJpdGVtIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Selector.js\n"));

/***/ })

});