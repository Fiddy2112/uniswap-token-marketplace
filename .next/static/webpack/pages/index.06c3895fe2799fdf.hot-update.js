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

/***/ "./components/SwapComponent.js":
/*!*************************************!*\
  !*** ./components/SwapComponent.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/context */ \"./utils/context.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/esm/exports/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst SwapComponent = ()=>{\n    _s();\n    const [srcToken, setSrcToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth);\n    const [destToken, setDestToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [outputValue, setOutputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const isReversed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const INCREASE_ALLOWANCE = \"Increase allowance\";\n    const ENTER_AMOUNT = \"Enter an amount\";\n    const CONNECT_WALLET = \"Connect wallet\";\n    const SWAP = \"Swap\";\n    const srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    const destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    const [srcTokenComp, setSrcTokenComp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [destTokenComp, setDestTokenComp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [swapBtnText, setSwapBtnText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ENTER_AMOUNT);\n    const [txPending, setTxPending] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    const notifySuccess = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"Transaction completed.\");\n    const account = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //handling the text of the submit button\n        if (!account) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        account\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (document.activeElement !== outputValueRef.current && document.activeElement.ariaLabel !== \"srcToken\" && !isReversed.current) {\n            populateOutputValue(inputValue);\n            setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                obj: srcTokenObj,\n                ref: inputValueRef\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 78,\n                columnNumber: 23\n            }, undefined));\n            if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n        }\n    }, [\n        inputValue,\n        destToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (document.activeElement !== inputValueRef.current && document.activeElement.ariaLabel !== \"destToken\" && !isReversed.current) {\n            populateInputValue(outputValue);\n            setDestTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                obj: destTokenObj,\n                ref: outputValueRef\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 92,\n                columnNumber: 24\n            }, undefined));\n            if ((outputValue === null || outputValue === void 0 ? void 0 : outputValue.length) === 0) setInputValue(\"\");\n            // Resetting the isReversed value if its set\n            if (isReversed.current) isReversed.current = false;\n        }\n    }, [\n        outputValue,\n        srcToken\n    ]);\n    const handleReverseExchange = (e)=>{\n        // settings the isReversed value to prevent the input/output values\n        // being calculated in their respective side - effects\n        isReversed.current = true;\n        // swap token (srcToken <=> destToken)\n        // swap value (inputValue <=> outputValue)\n        setInputValue(outputValue);\n        setOutputValue(inputValue);\n        setSrcToken(destToken);\n        setDestToken(srcToken);\n    };\n    const getSwapBtnClassName = ()=>{\n        let className = \"p-4 w-full my-2 rounded-xl\";\n        className += swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET ? \" text-zinc-400 bg-zinc-800 pointer-events-none\" : \" bg-blue-700\";\n        className += swapBtnText === INCREASE_ALLOWANCE ? \" bg-yellow-600\" : \"\";\n        return className;\n    };\n    const populateOutputValue = async ()=>{\n        if (destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE || srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE || !inputValue) return;\n        try {\n            if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) setOutputValue(inputValue);\n            else if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) {\n                const value = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toEth)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toWei)(inputValue), 14);\n                setOutputValue(value);\n            } else if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) {\n                const value = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toEth)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toWei)(inputValue), 14);\n                setOutputValue(value);\n            }\n        } catch (err) {\n            setOutputValue(\"\");\n            console.log(err);\n        }\n    };\n    const populateInputValue = ()=>{};\n    const handleIncreaseAllowance = async ()=>{\n        // increase the allowance\n        setTxPending(true);\n        await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.increaseAllowance)(srcToken, inputValue);\n        setTxPending(false);\n        //set swapbtn to 'swap' again\n        setSwapBtnText(SWAP);\n    };\n    const handleSwap = async ()=>{\n        if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) {\n            performSwap();\n        } else {\n            // Check whether there is allowance when the swap deals with tokenEth/tokenToToken\n            setTxPending(true);\n            const result = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.hasValidAllowance)(account, srcToken, inputValue);\n            setTxPending(false);\n            if (result) performSwap();\n            else handleInsufficientAllowance();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-[1px] rounded-l border-[#ffeaa7] bg-[#ffeaa7] w-[100%] p-4 px-6 rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-4 px-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Swap\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 176,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_8__.Cog, {}, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 177,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 175,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: [\n                    srcTokenComp,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-1/2 -translate-x-1/2 -border-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110\",\n                        onClick: handleReverseExchange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 182,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 179,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: destTokenComp\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 187,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: getSwapBtnClassName(),\n                onClick: ()=>{\n                    if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();\n                    else if (swapBtnText === SWAP) handleSwap();\n                },\n                children: swapBtnText\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 190,\n                columnNumber: 7\n            }, undefined),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TransactionStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 199,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 201,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n        lineNumber: 174,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SwapComponent, \"5dRKhM4bIrGugh/OP4+IbVFeQMs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1N3YXBDb21wb25lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQTJEO0FBT2xDO0FBQ1c7QUFDZ0I7QUFDSDtBQUNKO0FBQ1U7QUFDcEI7QUFDTDtBQUU5QixNQUFNbUIsZ0JBQWdCOztJQUNwQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR25CLCtDQUFRQSxDQUFDYyxpREFBR0E7SUFDNUMsTUFBTSxDQUFDTSxXQUFXQyxhQUFhLEdBQUdyQiwrQ0FBUUEsQ0FBQ2EsMkRBQWFBO0lBRXhELE1BQU0sQ0FBQ1MsWUFBWUMsY0FBYyxHQUFHdkIsK0NBQVFBO0lBQzVDLE1BQU0sQ0FBQ3dCLGFBQWFDLGVBQWUsR0FBR3pCLCtDQUFRQTtJQUU5QyxNQUFNMEIsZ0JBQWdCekIsNkNBQU1BO0lBQzVCLE1BQU0wQixpQkFBaUIxQiw2Q0FBTUE7SUFFN0IsTUFBTTJCLGFBQWEzQiw2Q0FBTUEsQ0FBQztJQUUxQixNQUFNNEIscUJBQXFCO0lBQzNCLE1BQU1DLGVBQWU7SUFDckIsTUFBTUMsaUJBQWlCO0lBQ3ZCLE1BQU1DLE9BQU87SUFFYixNQUFNQyxjQUFjO1FBQ2xCQyxJQUFJO1FBQ0pDLE9BQU9iO1FBQ1BjLFVBQVViO1FBQ1ZjLGNBQWNuQjtRQUNkb0IsYUFBYWxCO1FBQ2JtQixVQUFVcEI7SUFDWjtJQUVBLE1BQU1xQixlQUFlO1FBQ25CTixJQUFJO1FBQ0pDLE9BQU9YO1FBQ1BZLFVBQVVYO1FBQ1ZZLGNBQWNqQjtRQUNka0IsYUFBYXBCO1FBQ2JxQixVQUFVbEI7SUFDWjtJQUVBLE1BQU0sQ0FBQ29CLGNBQWNDLGdCQUFnQixHQUFHMUMsK0NBQVFBO0lBQ2hELE1BQU0sQ0FBQzJDLGVBQWVDLGlCQUFpQixHQUFHNUMsK0NBQVFBO0lBRWxELE1BQU0sQ0FBQzZDLGFBQWFDLGVBQWUsR0FBRzlDLCtDQUFRQSxDQUFDOEI7SUFDL0MsTUFBTSxDQUFDaUIsV0FBV0MsYUFBYSxHQUFHaEQsK0NBQVFBLENBQUM7SUFFM0MsTUFBTWlELGNBQWMsQ0FBQ0MsTUFBUXpDLDZEQUFXLENBQUN5QyxLQUFLO1lBQUVFLFVBQVU7UUFBSztJQUMvRCxNQUFNQyxnQkFBZ0IsSUFBTTVDLCtEQUFhLENBQUM7SUFFMUMsTUFBTThDLFVBQVV4QyxpREFBVUE7SUFFMUJoQixnREFBU0EsQ0FBQztRQUNSLHdDQUF3QztRQUN4QyxJQUFJLENBQUN3RCxTQUFTVCxlQUFlZjthQUN4QixJQUFJLENBQUNULGNBQWMsQ0FBQ0UsYUFBYXNCLGVBQWVoQjthQUNoRGdCLGVBQWVkO0lBQ3RCLEdBQUc7UUFBQ1Y7UUFBWUU7UUFBYStCO0tBQVE7SUFFckN4RCxnREFBU0EsQ0FBQztRQUNSLElBQ0V5RCxTQUFTQyxhQUFhLEtBQUs5QixlQUFlK0IsT0FBTyxJQUNqREYsU0FBU0MsYUFBYSxDQUFDRSxTQUFTLEtBQUssY0FDckMsQ0FBQy9CLFdBQVc4QixPQUFPLEVBQ25CO1lBQ0FFLG9CQUFvQnRDO1lBRXBCb0IsOEJBQWdCLDhEQUFDbkMsa0RBQVNBO2dCQUFDc0QsS0FBSzVCO2dCQUFhNkIsS0FBS3BDOzs7Ozs7WUFFbEQsSUFBSUosQ0FBQUEsdUJBQUFBLGlDQUFBQSxXQUFZeUMsTUFBTSxNQUFLLEdBQUd0QyxlQUFlO1FBQy9DO0lBQ0YsR0FBRztRQUFDSDtRQUFZRjtLQUFVO0lBRTFCckIsZ0RBQVNBLENBQUM7UUFDUixJQUNFeUQsU0FBU0MsYUFBYSxLQUFLL0IsY0FBY2dDLE9BQU8sSUFDaERGLFNBQVNDLGFBQWEsQ0FBQ0UsU0FBUyxLQUFLLGVBQ3JDLENBQUMvQixXQUFXOEIsT0FBTyxFQUNuQjtZQUNBTSxtQkFBbUJ4QztZQUVuQm9CLCtCQUFpQiw4REFBQ3JDLGtEQUFTQTtnQkFBQ3NELEtBQUtyQjtnQkFBY3NCLEtBQUtuQzs7Ozs7O1lBRXBELElBQUlILENBQUFBLHdCQUFBQSxrQ0FBQUEsWUFBYXVDLE1BQU0sTUFBSyxHQUFHeEMsY0FBYztZQUU3Qyw0Q0FBNEM7WUFDNUMsSUFBSUssV0FBVzhCLE9BQU8sRUFBRTlCLFdBQVc4QixPQUFPLEdBQUc7UUFDL0M7SUFDRixHQUFHO1FBQUNsQztRQUFhTjtLQUFTO0lBRTFCLE1BQU0rQyx3QkFBd0IsQ0FBQ0M7UUFDN0IsbUVBQW1FO1FBQ25FLHNEQUFzRDtRQUN0RHRDLFdBQVc4QixPQUFPLEdBQUc7UUFFckIsc0NBQXNDO1FBQ3RDLDBDQUEwQztRQUMxQ25DLGNBQWNDO1FBQ2RDLGVBQWVIO1FBRWZILFlBQVlDO1FBQ1pDLGFBQWFIO0lBQ2Y7SUFFQSxNQUFNaUQsc0JBQXNCO1FBQzFCLElBQUlDLFlBQVk7UUFDaEJBLGFBQ0V2QixnQkFBZ0JmLGdCQUFnQmUsZ0JBQWdCZCxpQkFDNUMsbURBQ0E7UUFDTnFDLGFBQWF2QixnQkFBZ0JoQixxQkFBcUIsbUJBQW1CO1FBQ3JFLE9BQU91QztJQUNUO0lBRUEsTUFBTVIsc0JBQXNCO1FBQzFCLElBQ0V4QyxjQUFjUCwyREFBYUEsSUFDM0JLLGFBQWFMLDJEQUFhQSxJQUMxQixDQUFDUyxZQUVEO1FBQ0YsSUFBSTtZQUNGLElBQUlKLGFBQWFKLGlEQUFHQSxJQUFJTSxjQUFjTixpREFBR0EsRUFBRVcsZUFBZUg7aUJBQ3JELElBQUlKLGFBQWFKLGlEQUFHQSxJQUFJTSxjQUFjTixpREFBR0EsRUFBRTtnQkFDOUMsTUFBTXFCLFFBQVF4QixtREFBS0EsQ0FBQ0MsbURBQUtBLENBQUNVLGFBQWE7Z0JBQ3ZDRyxlQUFlVTtZQUNqQixPQUFPLElBQUlqQixhQUFhSixpREFBR0EsSUFBSU0sY0FBY04saURBQUdBLEVBQUU7Z0JBQ2hELE1BQU1xQixRQUFReEIsbURBQUtBLENBQUNDLG1EQUFLQSxDQUFDVSxhQUFhO2dCQUN2Q0csZUFBZVU7WUFDakI7UUFDRixFQUFFLE9BQU9rQyxLQUFLO1lBQ1o1QyxlQUFlO1lBRWY2QyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtJQUVBLE1BQU1MLHFCQUFxQixLQUFPO0lBRWxDLE1BQU1RLDBCQUEwQjtRQUM5Qix5QkFBeUI7UUFDekJ4QixhQUFhO1FBQ2IsTUFBTTdDLGlFQUFpQkEsQ0FBQ2UsVUFBVUk7UUFDbEMwQixhQUFhO1FBRWIsNkJBQTZCO1FBQzdCRixlQUFlZDtJQUNqQjtJQUVBLE1BQU15QyxhQUFhO1FBQ2pCLElBQUl2RCxhQUFhSixpREFBR0EsSUFBSU0sY0FBY04saURBQUdBLEVBQUU7WUFDekM0RDtRQUNGLE9BQU87WUFDTCxrRkFBa0Y7WUFDbEYxQixhQUFhO1lBQ2IsTUFBTTJCLFNBQVMsTUFBTXpFLGlFQUFpQkEsQ0FBQ3FELFNBQVNyQyxVQUFVSTtZQUMxRDBCLGFBQWE7WUFDYixJQUFJMkIsUUFBUUQ7aUJBQ1BFO1FBQ1A7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJVCxXQUFVOzswQkFDYiw4REFBQ1M7Z0JBQUlULFdBQVU7O2tDQUNiLDhEQUFDVTtrQ0FBRTs7Ozs7O2tDQUNILDhEQUFDOUQsdUNBQUdBOzs7Ozs7Ozs7OzswQkFFTiw4REFBQzZEO2dCQUFJVCxXQUFVOztvQkFDWjNCO2tDQUVELDhEQUFDb0M7d0JBQ0NULFdBQVU7d0JBQ1ZXLFNBQVNkOzs7Ozs7Ozs7Ozs7MEJBR2IsOERBQUNZO2dCQUFJVCxXQUFVOzBCQUNaekI7Ozs7OzswQkFFSCw4REFBQ3FDO2dCQUNDWixXQUFXRDtnQkFDWFksU0FBUztvQkFDUCxJQUFJbEMsZ0JBQWdCaEIsb0JBQW9CMkM7eUJBQ25DLElBQUkzQixnQkFBZ0JiLE1BQU15QztnQkFDakM7MEJBRUM1Qjs7Ozs7O1lBRUZFLDJCQUFhLDhEQUFDdkMsMERBQWlCQTs7Ozs7MEJBRWhDLDhEQUFDRSxvREFBT0E7Ozs7Ozs7Ozs7O0FBR2Q7R0EzTE1POztRQTRDWUYsNkNBQVVBOzs7S0E1Q3RCRTtBQTZMTiwrREFBZUEsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1N3YXBDb21wb25lbnQuanM/OTJlZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgaGFzVmFsaWRBbGxvd2FuY2UsXHJcbiAgaW5jcmVhc2VBbGxvd2FuY2UsXHJcbiAgc3dhcFRva2VuVG9FdGgsXHJcbiAgc3dhcEV0aFRvVG9rZW4sXHJcbiAgc3dhcFRva2VuVG9Ub2tlbixcclxufSBmcm9tIFwiQC91dGlscy9jb250ZXh0XCI7XHJcbmltcG9ydCBTd2FwRmllbGQgZnJvbSBcIi4vU3dhcEZpZWxkXCI7XHJcbmltcG9ydCBUcmFuc2FjdGlvblN0YXR1cyBmcm9tIFwiLi9UcmFuc2FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgdG9hc3QsIHsgVG9hc3RlciB9IGZyb20gXCJyZWFjdC1ob3QtdG9hc3RcIjtcclxuaW1wb3J0IHsgdG9FdGgsIHRvV2VpIH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgREVGQVVMVF9WQUxVRSwgRXRoIH0gZnJvbSBcIkAvdXRpbHMvc2FsZVRva2VuXCI7XHJcbmltcG9ydCB7IHVzZUFjY291bnQgfSBmcm9tIFwid2FnbWlcIjtcclxuaW1wb3J0IHsgQ29nIH0gZnJvbSBcIi4vaW5kZXhcIjtcclxuXHJcbmNvbnN0IFN3YXBDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NyY1Rva2VuLCBzZXRTcmNUb2tlbl0gPSB1c2VTdGF0ZShFdGgpO1xyXG4gIGNvbnN0IFtkZXN0VG9rZW4sIHNldERlc3RUb2tlbl0gPSB1c2VTdGF0ZShERUZBVUxUX1ZBTFVFKTtcclxuXHJcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbb3V0cHV0VmFsdWUsIHNldE91dHB1dFZhbHVlXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IGlucHV0VmFsdWVSZWYgPSB1c2VSZWYoKTtcclxuICBjb25zdCBvdXRwdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xyXG5cclxuICBjb25zdCBpc1JldmVyc2VkID0gdXNlUmVmKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgSU5DUkVBU0VfQUxMT1dBTkNFID0gXCJJbmNyZWFzZSBhbGxvd2FuY2VcIjtcclxuICBjb25zdCBFTlRFUl9BTU9VTlQgPSBcIkVudGVyIGFuIGFtb3VudFwiO1xyXG4gIGNvbnN0IENPTk5FQ1RfV0FMTEVUID0gXCJDb25uZWN0IHdhbGxldFwiO1xyXG4gIGNvbnN0IFNXQVAgPSBcIlN3YXBcIjtcclxuXHJcbiAgY29uc3Qgc3JjVG9rZW5PYmogPSB7XHJcbiAgICBpZDogXCJzcmNUb2tlblwiLFxyXG4gICAgdmFsdWU6IGlucHV0VmFsdWUsXHJcbiAgICBzZXRWYWx1ZTogc2V0SW5wdXRWYWx1ZSxcclxuICAgIGRlZmF1bHRWYWx1ZTogc3JjVG9rZW4sXHJcbiAgICBpZ25vcmVWYWx1ZTogZGVzdFRva2VuLFxyXG4gICAgc2V0VG9rZW46IHNldFNyY1Rva2VuLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRlc3RUb2tlbk9iaiA9IHtcclxuICAgIGlkOiBcImRlc3RUb2tlblwiLFxyXG4gICAgdmFsdWU6IG91dHB1dFZhbHVlLFxyXG4gICAgc2V0VmFsdWU6IHNldE91dHB1dFZhbHVlLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBkZXN0VG9rZW4sXHJcbiAgICBpZ25vcmVWYWx1ZTogc3JjVG9rZW4sXHJcbiAgICBzZXRUb2tlbjogc2V0RGVzdFRva2VuLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IFtzcmNUb2tlbkNvbXAsIHNldFNyY1Rva2VuQ29tcF0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtkZXN0VG9rZW5Db21wLCBzZXREZXN0VG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XHJcblxyXG4gIGNvbnN0IFtzd2FwQnRuVGV4dCwgc2V0U3dhcEJ0blRleHRdID0gdXNlU3RhdGUoRU5URVJfQU1PVU5UKTtcclxuICBjb25zdCBbdHhQZW5kaW5nLCBzZXRUeFBlbmRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBub3RpZnlFcnJvciA9IChtc2cpID0+IHRvYXN0LmVycm9yKG1zZywgeyBkdXJhdGlvbjogNjAwMCB9KTtcclxuICBjb25zdCBub3RpZnlTdWNjZXNzID0gKCkgPT4gdG9hc3Quc3VjY2VzcyhcIlRyYW5zYWN0aW9uIGNvbXBsZXRlZC5cIik7XHJcblxyXG4gIGNvbnN0IGFjY291bnQgPSB1c2VBY2NvdW50KCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvL2hhbmRsaW5nIHRoZSB0ZXh0IG9mIHRoZSBzdWJtaXQgYnV0dG9uXHJcbiAgICBpZiAoIWFjY291bnQpIHNldFN3YXBCdG5UZXh0KENPTk5FQ1RfV0FMTEVUKTtcclxuICAgIGVsc2UgaWYgKCFpbnB1dFZhbHVlIHx8ICFvdXRwdXRWYWx1ZSkgc2V0U3dhcEJ0blRleHQoRU5URVJfQU1PVU5UKTtcclxuICAgIGVsc2Ugc2V0U3dhcEJ0blRleHQoU1dBUCk7XHJcbiAgfSwgW2lucHV0VmFsdWUsIG91dHB1dFZhbHVlLCBhY2NvdW50XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IG91dHB1dFZhbHVlUmVmLmN1cnJlbnQgJiZcclxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5hcmlhTGFiZWwgIT09IFwic3JjVG9rZW5cIiAmJlxyXG4gICAgICAhaXNSZXZlcnNlZC5jdXJyZW50XHJcbiAgICApIHtcclxuICAgICAgcG9wdWxhdGVPdXRwdXRWYWx1ZShpbnB1dFZhbHVlKTtcclxuXHJcbiAgICAgIHNldFNyY1Rva2VuQ29tcCg8U3dhcEZpZWxkIG9iaj17c3JjVG9rZW5PYmp9IHJlZj17aW5wdXRWYWx1ZVJlZn0gLz4pO1xyXG5cclxuICAgICAgaWYgKGlucHV0VmFsdWU/Lmxlbmd0aCA9PT0gMCkgc2V0T3V0cHV0VmFsdWUoXCJcIik7XHJcbiAgICB9XHJcbiAgfSwgW2lucHV0VmFsdWUsIGRlc3RUb2tlbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICE9PSBpbnB1dFZhbHVlUmVmLmN1cnJlbnQgJiZcclxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5hcmlhTGFiZWwgIT09IFwiZGVzdFRva2VuXCIgJiZcclxuICAgICAgIWlzUmV2ZXJzZWQuY3VycmVudFxyXG4gICAgKSB7XHJcbiAgICAgIHBvcHVsYXRlSW5wdXRWYWx1ZShvdXRwdXRWYWx1ZSk7XHJcblxyXG4gICAgICBzZXREZXN0VG9rZW5Db21wKDxTd2FwRmllbGQgb2JqPXtkZXN0VG9rZW5PYmp9IHJlZj17b3V0cHV0VmFsdWVSZWZ9IC8+KTtcclxuXHJcbiAgICAgIGlmIChvdXRwdXRWYWx1ZT8ubGVuZ3RoID09PSAwKSBzZXRJbnB1dFZhbHVlKFwiXCIpO1xyXG5cclxuICAgICAgLy8gUmVzZXR0aW5nIHRoZSBpc1JldmVyc2VkIHZhbHVlIGlmIGl0cyBzZXRcclxuICAgICAgaWYgKGlzUmV2ZXJzZWQuY3VycmVudCkgaXNSZXZlcnNlZC5jdXJyZW50ID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSwgW291dHB1dFZhbHVlLCBzcmNUb2tlbl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXZlcnNlRXhjaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgLy8gc2V0dGluZ3MgdGhlIGlzUmV2ZXJzZWQgdmFsdWUgdG8gcHJldmVudCB0aGUgaW5wdXQvb3V0cHV0IHZhbHVlc1xyXG4gICAgLy8gYmVpbmcgY2FsY3VsYXRlZCBpbiB0aGVpciByZXNwZWN0aXZlIHNpZGUgLSBlZmZlY3RzXHJcbiAgICBpc1JldmVyc2VkLmN1cnJlbnQgPSB0cnVlO1xyXG5cclxuICAgIC8vIHN3YXAgdG9rZW4gKHNyY1Rva2VuIDw9PiBkZXN0VG9rZW4pXHJcbiAgICAvLyBzd2FwIHZhbHVlIChpbnB1dFZhbHVlIDw9PiBvdXRwdXRWYWx1ZSlcclxuICAgIHNldElucHV0VmFsdWUob3V0cHV0VmFsdWUpO1xyXG4gICAgc2V0T3V0cHV0VmFsdWUoaW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgc2V0U3JjVG9rZW4oZGVzdFRva2VuKTtcclxuICAgIHNldERlc3RUb2tlbihzcmNUb2tlbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U3dhcEJ0bkNsYXNzTmFtZSA9ICgpID0+IHtcclxuICAgIGxldCBjbGFzc05hbWUgPSBcInAtNCB3LWZ1bGwgbXktMiByb3VuZGVkLXhsXCI7XHJcbiAgICBjbGFzc05hbWUgKz1cclxuICAgICAgc3dhcEJ0blRleHQgPT09IEVOVEVSX0FNT1VOVCB8fCBzd2FwQnRuVGV4dCA9PT0gQ09OTkVDVF9XQUxMRVRcclxuICAgICAgICA/IFwiIHRleHQtemluYy00MDAgYmctemluYy04MDAgcG9pbnRlci1ldmVudHMtbm9uZVwiXHJcbiAgICAgICAgOiBcIiBiZy1ibHVlLTcwMFwiO1xyXG4gICAgY2xhc3NOYW1lICs9IHN3YXBCdG5UZXh0ID09PSBJTkNSRUFTRV9BTExPV0FOQ0UgPyBcIiBiZy15ZWxsb3ctNjAwXCIgOiBcIlwiO1xyXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwb3B1bGF0ZU91dHB1dFZhbHVlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBkZXN0VG9rZW4gPT09IERFRkFVTFRfVkFMVUUgfHxcclxuICAgICAgc3JjVG9rZW4gPT09IERFRkFVTFRfVkFMVUUgfHxcclxuICAgICAgIWlucHV0VmFsdWVcclxuICAgIClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHNyY1Rva2VuICE9PSBFdGggJiYgZGVzdFRva2VuICE9PSBFdGgpIHNldE91dHB1dFZhbHVlKGlucHV0VmFsdWUpO1xyXG4gICAgICBlbHNlIGlmIChzcmNUb2tlbiA9PT0gRXRoICYmIGRlc3RUb2tlbiAhPT0gRXRoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0b0V0aCh0b1dlaShpbnB1dFZhbHVlKSwgMTQpO1xyXG4gICAgICAgIHNldE91dHB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgfSBlbHNlIGlmIChzcmNUb2tlbiAhPT0gRXRoICYmIGRlc3RUb2tlbiA9PT0gRXRoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0b0V0aCh0b1dlaShpbnB1dFZhbHVlKSwgMTQpO1xyXG4gICAgICAgIHNldE91dHB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldE91dHB1dFZhbHVlKFwiXCIpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwb3B1bGF0ZUlucHV0VmFsdWUgPSAoKSA9PiB7fTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5jcmVhc2VBbGxvd2FuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBpbmNyZWFzZSB0aGUgYWxsb3dhbmNlXHJcbiAgICBzZXRUeFBlbmRpbmcodHJ1ZSk7XHJcbiAgICBhd2FpdCBpbmNyZWFzZUFsbG93YW5jZShzcmNUb2tlbiwgaW5wdXRWYWx1ZSk7XHJcbiAgICBzZXRUeFBlbmRpbmcoZmFsc2UpO1xyXG5cclxuICAgIC8vc2V0IHN3YXBidG4gdG8gJ3N3YXAnIGFnYWluXHJcbiAgICBzZXRTd2FwQnRuVGV4dChTV0FQKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTd2FwID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHNyY1Rva2VuID09PSBFdGggJiYgZGVzdFRva2VuICE9PSBFdGgpIHtcclxuICAgICAgcGVyZm9ybVN3YXAoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIENoZWNrIHdoZXRoZXIgdGhlcmUgaXMgYWxsb3dhbmNlIHdoZW4gdGhlIHN3YXAgZGVhbHMgd2l0aCB0b2tlbkV0aC90b2tlblRvVG9rZW5cclxuICAgICAgc2V0VHhQZW5kaW5nKHRydWUpO1xyXG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBoYXNWYWxpZEFsbG93YW5jZShhY2NvdW50LCBzcmNUb2tlbiwgaW5wdXRWYWx1ZSk7XHJcbiAgICAgIHNldFR4UGVuZGluZyhmYWxzZSk7XHJcbiAgICAgIGlmIChyZXN1bHQpIHBlcmZvcm1Td2FwKCk7XHJcbiAgICAgIGVsc2UgaGFuZGxlSW5zdWZmaWNpZW50QWxsb3dhbmNlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLVsxcHhdIHJvdW5kZWQtbCBib3JkZXItWyNmZmVhYTddIGJnLVsjZmZlYWE3XSB3LVsxMDAlXSBwLTQgcHgtNiByb3VuZGVkLXhsXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTQgcHgtMVwiPlxyXG4gICAgICAgIDxwPlN3YXA8L3A+XHJcbiAgICAgICAgPENvZyAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1bIzIxMjQyOV0gcC00IHB5LTYgcm91bmRlZC14bCBtYi0yIGJvcmRlci1bMnB4XSBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXppbmMtNjAwXCI+XHJcbiAgICAgICAge3NyY1Rva2VuQ29tcH1cclxuXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiAtYm9yZGVyLTYgaC0xMCBwLTEgYmctWyMyMTI0MjldIGJvcmRlci00IGJvcmRlci16aW5jLTkwMCB0ZXh0LXppbmMtMzAwIHJvdW5kZWQteGwgY3Vyc29yLXBvaW50ZXIgaG92ZXI6c2NhbGUtMTEwXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJldmVyc2VFeGNoYW5nZX1cclxuICAgICAgICA+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjMjEyNDI5XSBwLTQgcHktNiByb3VuZGVkLXhsIG10LTIgYm9yZGVyLVsycHhdIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItemluYy02MDBcIj5cclxuICAgICAgICB7ZGVzdFRva2VuQ29tcH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b25cclxuICAgICAgICBjbGFzc05hbWU9e2dldFN3YXBCdG5DbGFzc05hbWUoKX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoc3dhcEJ0blRleHQgPT09IElOQ1JFQVNFX0FMTE9XQU5DRSkgaGFuZGxlSW5jcmVhc2VBbGxvd2FuY2UoKTtcclxuICAgICAgICAgIGVsc2UgaWYgKHN3YXBCdG5UZXh0ID09PSBTV0FQKSBoYW5kbGVTd2FwKCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtzd2FwQnRuVGV4dH1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIHt0eFBlbmRpbmcgJiYgPFRyYW5zYWN0aW9uU3RhdHVzIC8+fVxyXG5cclxuICAgICAgPFRvYXN0ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTd2FwQ29tcG9uZW50O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImhhc1ZhbGlkQWxsb3dhbmNlIiwiaW5jcmVhc2VBbGxvd2FuY2UiLCJzd2FwVG9rZW5Ub0V0aCIsInN3YXBFdGhUb1Rva2VuIiwic3dhcFRva2VuVG9Ub2tlbiIsIlN3YXBGaWVsZCIsIlRyYW5zYWN0aW9uU3RhdHVzIiwidG9hc3QiLCJUb2FzdGVyIiwidG9FdGgiLCJ0b1dlaSIsIkRFRkFVTFRfVkFMVUUiLCJFdGgiLCJ1c2VBY2NvdW50IiwiQ29nIiwiU3dhcENvbXBvbmVudCIsInNyY1Rva2VuIiwic2V0U3JjVG9rZW4iLCJkZXN0VG9rZW4iLCJzZXREZXN0VG9rZW4iLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsIm91dHB1dFZhbHVlIiwic2V0T3V0cHV0VmFsdWUiLCJpbnB1dFZhbHVlUmVmIiwib3V0cHV0VmFsdWVSZWYiLCJpc1JldmVyc2VkIiwiSU5DUkVBU0VfQUxMT1dBTkNFIiwiRU5URVJfQU1PVU5UIiwiQ09OTkVDVF9XQUxMRVQiLCJTV0FQIiwic3JjVG9rZW5PYmoiLCJpZCIsInZhbHVlIiwic2V0VmFsdWUiLCJkZWZhdWx0VmFsdWUiLCJpZ25vcmVWYWx1ZSIsInNldFRva2VuIiwiZGVzdFRva2VuT2JqIiwic3JjVG9rZW5Db21wIiwic2V0U3JjVG9rZW5Db21wIiwiZGVzdFRva2VuQ29tcCIsInNldERlc3RUb2tlbkNvbXAiLCJzd2FwQnRuVGV4dCIsInNldFN3YXBCdG5UZXh0IiwidHhQZW5kaW5nIiwic2V0VHhQZW5kaW5nIiwibm90aWZ5RXJyb3IiLCJtc2ciLCJlcnJvciIsImR1cmF0aW9uIiwibm90aWZ5U3VjY2VzcyIsInN1Y2Nlc3MiLCJhY2NvdW50IiwiZG9jdW1lbnQiLCJhY3RpdmVFbGVtZW50IiwiY3VycmVudCIsImFyaWFMYWJlbCIsInBvcHVsYXRlT3V0cHV0VmFsdWUiLCJvYmoiLCJyZWYiLCJsZW5ndGgiLCJwb3B1bGF0ZUlucHV0VmFsdWUiLCJoYW5kbGVSZXZlcnNlRXhjaGFuZ2UiLCJlIiwiZ2V0U3dhcEJ0bkNsYXNzTmFtZSIsImNsYXNzTmFtZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVJbmNyZWFzZUFsbG93YW5jZSIsImhhbmRsZVN3YXAiLCJwZXJmb3JtU3dhcCIsInJlc3VsdCIsImhhbmRsZUluc3VmZmljaWVudEFsbG93YW5jZSIsImRpdiIsInAiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});