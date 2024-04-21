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

/***/ "./components/TokenBalance.js":
/*!************************************!*\
  !*** ./components/TokenBalance.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/context */ \"./utils/context.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n// Internal import\n\n\nfunction TokenBalance(param) {\n    let { name, walletAddress } = param;\n    _s();\n    const infinity = 1000 / 0;\n    const [balance, setBalance] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\".concat(infinity));\n    const [tokenAddress, setTokenAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [copyIcon, setCopyIcon] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        icon: _index__WEBPACK_IMPORTED_MODULE_3__.ClipboardIcon\n    });\n    const [txPending, setTxPending] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    const notifySuccess = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].success(\"Transaction completed\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (name && walletAddress) {\n            fetchTokenBalance();\n            fetchTokenAddress();\n        } else setBalance(\"\".concat(infinity));\n    }, [\n        name,\n        walletAddress\n    ]);\n    const fetchTokenBalance = async ()=>{\n        const bal = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_5__.getTokenBalance)(name, walletAddress);\n        console.log(bal);\n        const fbal = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.formatUnits(bal.toString(), 18);\n        setBalance(fbal.toString());\n    };\n    const fetchTokenAddress = async ()=>{\n        const address = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_5__.getTokenAddress)(name);\n        console.log(address);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex mx-2 border-[1px] rounded-l rounded-r-lg border-[#7765F3]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\TokenBalance.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"bg-zinc-800 p-0.5 px-3 ml-3 rounded-lg text-zinc-100\",\n                        children: balance\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\TokenBalance.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\TokenBalance.js\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center p-2 px-2 bg-[#7765F3] rounded-r-lg\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(copyIcon.icon, {\n                    className: \"h-6 cursor-pointer\",\n                    onClick: ()=>{\n                        navigator.clipboard.writeText(tokenAddress);\n                        setCopyIcon({\n                            icon: _index__WEBPACK_IMPORTED_MODULE_3__.ClipboardCheckIcon\n                        });\n                    }\n                }, void 0, false, {\n                    fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\TokenBalance.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\TokenBalance.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TransactionStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\TokenBalance.js\",\n                lineNumber: 61,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__.Toaster, {}, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\TokenBalance.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\TokenBalance.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(TokenBalance, \"wRWSc5DmwKQ/uZATrJem888SCfo=\");\n_c = TokenBalance;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TokenBalance);\nvar _c;\n$RefreshReg$(_c, \"TokenBalance\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Rva2VuQmFsYW5jZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDM0I7QUFDaUI7QUFFVztBQUU1RCxrQkFBa0I7QUFDa0M7QUFLM0I7QUFFekIsU0FBU2EsYUFBYSxLQUF1QjtRQUF2QixFQUFFQyxJQUFJLEVBQUVDLGFBQWEsRUFBRSxHQUF2Qjs7SUFDcEIsTUFBTUMsV0FBVyxPQUFPO0lBQ3hCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHakIsK0NBQVFBLENBQUMsR0FBWSxPQUFUZTtJQUMxQyxNQUFNLENBQUNHLGNBQWNDLGdCQUFnQixHQUFHbkIsK0NBQVFBO0lBQ2hELE1BQU0sQ0FBQ29CLFVBQVVDLFlBQVksR0FBR3JCLCtDQUFRQSxDQUFDO1FBQUVzQixNQUFNZixpREFBYUE7SUFBQztJQUMvRCxNQUFNLENBQUNnQixXQUFXQyxhQUFhLEdBQUd4QiwrQ0FBUUE7SUFFMUMsTUFBTXlCLGNBQWMsQ0FBQ0MsTUFBUXRCLDZEQUFXLENBQUNzQixLQUFLO1lBQUVFLFVBQVU7UUFBSztJQUMvRCxNQUFNQyxnQkFBZ0IsQ0FBQ0gsTUFBUXRCLCtEQUFhLENBQUM7SUFFN0NILGdEQUFTQSxDQUFDO1FBQ1IsSUFBSVksUUFBUUMsZUFBZTtZQUN6QmlCO1lBQ0FDO1FBQ0YsT0FBT2YsV0FBVyxHQUFZLE9BQVRGO0lBQ3ZCLEdBQUc7UUFBQ0Y7UUFBTUM7S0FBYztJQUV4QixNQUFNaUIsb0JBQW9CO1FBQ3hCLE1BQU1FLE1BQU0sTUFBTXZCLCtEQUFlQSxDQUFDRyxNQUFNQztRQUN4Q29CLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixNQUFNRyxPQUFPakMsMENBQU1BLENBQUNrQyxXQUFXLENBQUNKLElBQUlLLFFBQVEsSUFBSTtRQUNoRHJCLFdBQVdtQixLQUFLRSxRQUFRO0lBQzFCO0lBRUEsTUFBTU4sb0JBQW9CO1FBQ3hCLE1BQU1PLFVBQVUsTUFBTTlCLCtEQUFlQSxDQUFDSTtRQUN0Q3FCLFFBQVFDLEdBQUcsQ0FBQ0k7SUFDZDtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBVzVCOzs7Ozs7a0NBQ3hCLDhEQUFDNkI7d0JBQUVELFdBQVU7a0NBQ1Z6Qjs7Ozs7Ozs7Ozs7OzBCQUlMLDhEQUFDd0I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNyQixTQUFTRSxJQUFJO29CQUNabUIsV0FBVTtvQkFDVkUsU0FBUzt3QkFDUEMsVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUM1Qjt3QkFDOUJHLFlBQVk7NEJBQUVDLE1BQU1oQixzREFBa0JBO3dCQUFDO29CQUN6Qzs7Ozs7Ozs7Ozs7WUFHSGlCLDJCQUFhLDhEQUFDZiwwREFBaUJBOzs7OzswQkFDaEMsOERBQUNILG9EQUFPQTs7Ozs7Ozs7Ozs7QUFHZDtHQWxEU087S0FBQUE7QUFvRFQsK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2tlbkJhbGFuY2UuanM/MjBjNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcclxuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcblxyXG5pbXBvcnQgeyBDbGlwYm9hcmRDaGVja0ljb24sIENsaXBib2FyZEljb24gfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuLy8gSW50ZXJuYWwgaW1wb3J0XHJcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQge1xyXG4gIGdldFRva2VuQWRkcmVzcyxcclxuICBnZXRUb2tlbkJhbGFuY2UsXHJcbiAgaW5jcmVhc2VBbGxvd2FuY2UsXHJcbn0gZnJvbSBcIkAvdXRpbHMvY29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gVG9rZW5CYWxhbmNlKHsgbmFtZSwgd2FsbGV0QWRkcmVzcyB9KSB7XHJcbiAgY29uc3QgaW5maW5pdHkgPSAxMDAwIC8gMDtcclxuICBjb25zdCBbYmFsYW5jZSwgc2V0QmFsYW5jZV0gPSB1c2VTdGF0ZShgJHtpbmZpbml0eX1gKTtcclxuICBjb25zdCBbdG9rZW5BZGRyZXNzLCBzZXRUb2tlbkFkZHJlc3NdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbY29weUljb24sIHNldENvcHlJY29uXSA9IHVzZVN0YXRlKHsgaWNvbjogQ2xpcGJvYXJkSWNvbiB9KTtcclxuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUeFBlbmRpbmddID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3Qgbm90aWZ5RXJyb3IgPSAobXNnKSA9PiB0b2FzdC5lcnJvcihtc2csIHsgZHVyYXRpb246IDYwMDAgfSk7XHJcbiAgY29uc3Qgbm90aWZ5U3VjY2VzcyA9IChtc2cpID0+IHRvYXN0LnN1Y2Nlc3MoXCJUcmFuc2FjdGlvbiBjb21wbGV0ZWRcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAobmFtZSAmJiB3YWxsZXRBZGRyZXNzKSB7XHJcbiAgICAgIGZldGNoVG9rZW5CYWxhbmNlKCk7XHJcbiAgICAgIGZldGNoVG9rZW5BZGRyZXNzKCk7XHJcbiAgICB9IGVsc2Ugc2V0QmFsYW5jZShgJHtpbmZpbml0eX1gKTtcclxuICB9LCBbbmFtZSwgd2FsbGV0QWRkcmVzc10pO1xyXG5cclxuICBjb25zdCBmZXRjaFRva2VuQmFsYW5jZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGJhbCA9IGF3YWl0IGdldFRva2VuQmFsYW5jZShuYW1lLCB3YWxsZXRBZGRyZXNzKTtcclxuICAgIGNvbnNvbGUubG9nKGJhbCk7XHJcbiAgICBjb25zdCBmYmFsID0gZXRoZXJzLmZvcm1hdFVuaXRzKGJhbC50b1N0cmluZygpLCAxOCk7XHJcbiAgICBzZXRCYWxhbmNlKGZiYWwudG9TdHJpbmcoKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hUb2tlbkFkZHJlc3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBhZGRyZXNzID0gYXdhaXQgZ2V0VG9rZW5BZGRyZXNzKG5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coYWRkcmVzcyk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG14LTIgYm9yZGVyLVsxcHhdIHJvdW5kZWQtbCByb3VuZGVkLXItbGcgYm9yZGVyLVsjNzc2NUYzXVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGJnLXppbmMtOTAwIHRleHQtemluYy0zMDAgdy1maXQgcC0yIHB4LTMgcm91bmRlZC1sLWxnXCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbVwiPntuYW1lfTwvcD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJiZy16aW5jLTgwMCBwLTAuNSBweC0zIG1sLTMgcm91bmRlZC1sZyB0ZXh0LXppbmMtMTAwXCI+XHJcbiAgICAgICAgICB7YmFsYW5jZX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBwLTIgcHgtMiBiZy1bIzc3NjVGM10gcm91bmRlZC1yLWxnXCI+XHJcbiAgICAgICAgPGNvcHlJY29uLmljb25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRva2VuQWRkcmVzcyk7XHJcbiAgICAgICAgICAgIHNldENvcHlJY29uKHsgaWNvbjogQ2xpcGJvYXJkQ2hlY2tJY29uIH0pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3R4UGVuZGluZyAmJiA8VHJhbnNhY3Rpb25TdGF0dXMgLz59XHJcbiAgICAgIDxUb2FzdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2tlbkJhbGFuY2U7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiZXRoZXJzIiwidG9hc3QiLCJUb2FzdGVyIiwiQ2xpcGJvYXJkQ2hlY2tJY29uIiwiQ2xpcGJvYXJkSWNvbiIsIlRyYW5zYWN0aW9uU3RhdHVzIiwiZ2V0VG9rZW5BZGRyZXNzIiwiZ2V0VG9rZW5CYWxhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJUb2tlbkJhbGFuY2UiLCJuYW1lIiwid2FsbGV0QWRkcmVzcyIsImluZmluaXR5IiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJ0b2tlbkFkZHJlc3MiLCJzZXRUb2tlbkFkZHJlc3MiLCJjb3B5SWNvbiIsInNldENvcHlJY29uIiwiaWNvbiIsInR4UGVuZGluZyIsInNldFR4UGVuZGluZyIsIm5vdGlmeUVycm9yIiwibXNnIiwiZXJyb3IiLCJkdXJhdGlvbiIsIm5vdGlmeVN1Y2Nlc3MiLCJzdWNjZXNzIiwiZmV0Y2hUb2tlbkJhbGFuY2UiLCJmZXRjaFRva2VuQWRkcmVzcyIsImJhbCIsImNvbnNvbGUiLCJsb2ciLCJmYmFsIiwiZm9ybWF0VW5pdHMiLCJ0b1N0cmluZyIsImFkZHJlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwib25DbGljayIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TokenBalance.js\n"));

/***/ })

});