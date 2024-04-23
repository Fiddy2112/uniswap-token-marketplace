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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/context */ \"./utils/context.js\");\n/* harmony import */ var _SwapField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SwapField */ \"./components/SwapField.js\");\n/* harmony import */ var _TransactionStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransactionStatus */ \"./components/TransactionStatus.js\");\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/index.mjs\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/utils */ \"./utils/utils.js\");\n/* harmony import */ var _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/utils/saleToken */ \"./utils/saleToken.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/esm/exports/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index */ \"./components/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst SwapComponent = ()=>{\n    _s();\n    const [srcToken, setSrcToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth);\n    const [destToken, setDestToken] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [outputValue, setOutputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const inputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const outputValueRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const isReversed = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);\n    const INCREASE_ALLOWANCE = \"Increase allowance\";\n    const ENTER_AMOUNT = \"Enter an amount\";\n    const CONNECT_WALLET = \"Connect wallet\";\n    const SWAP = \"Swap\";\n    const srcTokenObj = {\n        id: \"srcToken\",\n        value: inputValue,\n        setValue: setInputValue,\n        defaultValue: srcToken,\n        ignoreValue: destToken,\n        setToken: setSrcToken\n    };\n    const destTokenObj = {\n        id: \"destToken\",\n        value: outputValue,\n        setValue: setOutputValue,\n        defaultValue: destToken,\n        ignoreValue: srcToken,\n        setToken: setDestToken\n    };\n    const [srcTokenComp, setSrcTokenComp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [destTokenComp, setDestTokenComp] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [swapBtnText, setSwapBtnText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ENTER_AMOUNT);\n    const [txPending, setTxPending] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const notifyError = (msg)=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error(msg, {\n            duration: 6000\n        });\n    const notifySuccess = ()=>react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success(\"Transaction completed.\");\n    const account = (0,wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //handling the text of the submit button\n        if (!account) setSwapBtnText(CONNECT_WALLET);\n        else if (!inputValue || !outputValue) setSwapBtnText(ENTER_AMOUNT);\n        else setSwapBtnText(SWAP);\n    }, [\n        inputValue,\n        outputValue,\n        account\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (document.activeElement !== outputValueRef.current && document.activeElement.ariaLabel !== \"srcToken\" && !isReversed.current) {\n            populateOutputValue(inputValue);\n            setSrcTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                obj: srcTokenObj,\n                ref: inputValueRef\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 78,\n                columnNumber: 23\n            }, undefined));\n            if ((inputValue === null || inputValue === void 0 ? void 0 : inputValue.length) === 0) setOutputValue(\"\");\n        }\n    }, [\n        inputValue,\n        destToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (document.activeElement !== inputValueRef.current && document.activeElement.ariaLabel !== \"destToken\" && !isReversed.current) {\n            populateInputValue(outputValue);\n            setDestTokenComp(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SwapField__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                obj: destTokenObj,\n                ref: outputValueRef\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 92,\n                columnNumber: 24\n            }, undefined));\n            if ((outputValue === null || outputValue === void 0 ? void 0 : outputValue.length) === 0) setInputValue(\"\");\n            // Resetting the isReversed value if its set\n            if (isReversed.current) isReversed.current = false;\n        }\n    }, [\n        outputValue,\n        srcToken\n    ]);\n    const handleReverseExchange = (e)=>{\n        // settings the isReversed value to prevent the input/output values\n        // being calculated in their respective side - effects\n        isReversed.current = true;\n        // swap token (srcToken <=> destToken)\n        // swap value (inputValue <=> outputValue)\n        setInputValue(outputValue);\n        setOutputValue(inputValue);\n        setSrcToken(destToken);\n        setDestToken(srcToken);\n    };\n    const getSwapBtnClassName = ()=>{\n        let className = \"p-4 w-full my-2 rounded-xl\";\n        className += swapBtnText === ENTER_AMOUNT || swapBtnText === CONNECT_WALLET ? \" text-zinc-400 bg-zinc-800 pointer-events-none\" : \" bg-blue-700\";\n        className += swapBtnText === INCREASE_ALLOWANCE ? \" bg-yellow-600\" : \"\";\n        return className;\n    };\n    const populateOutputValue = async (inputValue)=>{\n        if (destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE || srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE || !inputValue) return;\n        try {\n            if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) setOutputValue(inputValue);\n            else if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) {\n                const value = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toEth)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toWei)(inputValue), 14);\n                setOutputValue(value);\n            } else if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) {\n                const value = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toEth)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toWei)(inputValue), 14);\n                setOutputValue(value);\n            }\n        } catch (err) {\n            setOutputValue(\"\");\n            console.log(err);\n        }\n    };\n    const populateInputValue = async (outputValue)=>{\n        if (destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE || srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.DEFAULT_VALUE || !outputValue) return;\n        try {\n            if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) setInputValue(outputValue);\n            else if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) {\n                const value = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toEth)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toWei)(outputValue), 14);\n                setInputValue(value);\n            } else if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) {\n                const value = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toEth)((0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.toWei)(outputValue), 14);\n                setInputValue(value);\n            }\n        } catch (err) {\n            setInputValue(\"0\");\n            console.log(err);\n        }\n    };\n    const handleIncreaseAllowance = async ()=>{\n        // increase the allowance\n        setTxPending(true);\n        await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.increaseAllowance)(srcToken, inputValue);\n        setTxPending(false);\n        //set swapbtn to 'swap' again\n        setSwapBtnText(SWAP);\n    };\n    const performSwap = async ()=>{\n        setTxPending(true);\n        let receipt;\n        if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) receipt = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.swapEthToToken)(destToken, inputValue);\n        else if (srcToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) receipt = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.swapTokenToEth)(srcToken, inputValue);\n    };\n    const handleSwap = async ()=>{\n        if (srcToken === _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth && destToken !== _utils_saleToken__WEBPACK_IMPORTED_MODULE_7__.Eth) {\n            performSwap();\n        } else {\n            // Check whether there is allowance when the swap deals with tokenEth/tokenToToken\n            setTxPending(true);\n            const result = await (0,_utils_context__WEBPACK_IMPORTED_MODULE_2__.hasValidAllowance)(account, srcToken, inputValue);\n            setTxPending(false);\n            if (result) performSwap();\n            else handleInsufficientAllowance();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border-[1px] rounded-l border-[#ffeaa7] bg-[#ffeaa7] w-[100%] p-4 px-6 rounded-xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between py-4 px-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Swap\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 207,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_8__.Cog, {}, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 208,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 206,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative bg-[#212429] p-4 py-6 rounded-xl mb-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: [\n                    srcTokenComp,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute left-1/2 -translate-x-1/2 -border-6 h-10 p-1 bg-[#212429] border-4 border-zinc-900 text-zinc-300 rounded-xl cursor-pointer hover:scale-110\",\n                        onClick: handleReverseExchange\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                        lineNumber: 213,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 210,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#212429] p-4 py-6 rounded-xl mt-2 border-[2px] border-transparent hover:border-zinc-600\",\n                children: destTokenComp\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 218,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: getSwapBtnClassName(),\n                onClick: ()=>{\n                    if (swapBtnText === INCREASE_ALLOWANCE) handleIncreaseAllowance();\n                    else if (swapBtnText === SWAP) handleSwap();\n                },\n                children: swapBtnText\n            }, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 221,\n                columnNumber: 7\n            }, undefined),\n            txPending && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TransactionStatus__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 230,\n                columnNumber: 21\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}, void 0, false, {\n                fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n                lineNumber: 232,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Workspace\\\\Web3\\\\uniswap_token_marketplace\\\\components\\\\SwapComponent.js\",\n        lineNumber: 205,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SwapComponent, \"5dRKhM4bIrGugh/OP4+IbVFeQMs=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_9__.useAccount\n    ];\n});\n_c = SwapComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SwapComponent);\nvar _c;\n$RefreshReg$(_c, \"SwapComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UDtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlWLFdBQVU7OzBCQUNiLDhEQUFDVTtnQkFBSVYsV0FBVTs7a0NBQ2IsOERBQUNXO2tDQUFFOzs7Ozs7a0NBQ0gsOERBQUMvRCx1Q0FBR0E7Ozs7Ozs7Ozs7OzBCQUVOLDhEQUFDOEQ7Z0JBQUlWLFdBQVU7O29CQUNaM0I7a0NBRUQsOERBQUNxQzt3QkFDQ1YsV0FBVTt3QkFDVlksU0FBU2Y7Ozs7Ozs7Ozs7OzswQkFHYiw4REFBQ2E7Z0JBQUlWLFdBQVU7MEJBQ1p6Qjs7Ozs7OzBCQUVILDhEQUFDc0M7Z0JBQ0NiLFdBQVdEO2dCQUNYYSxTQUFTO29CQUNQLElBQUluQyxnQkFBZ0JoQixvQkFBb0IyQzt5QkFDbkMsSUFBSTNCLGdCQUFnQmIsTUFBTTJDO2dCQUNqQzswQkFFQzlCOzs7Ozs7WUFFRkUsMkJBQWEsOERBQUN2QywwREFBaUJBOzs7OzswQkFFaEMsOERBQUNFLG9EQUFPQTs7Ozs7Ozs7Ozs7QUFHZDtHQTFOTU87O1FBNENZRiw2Q0FBVUE7OztLQTVDdEJFO0FBNE5OLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU3dhcENvbXBvbmVudC5qcz85MmVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBoYXNWYWxpZEFsbG93YW5jZSxcclxuICBpbmNyZWFzZUFsbG93YW5jZSxcclxuICBzd2FwVG9rZW5Ub0V0aCxcclxuICBzd2FwRXRoVG9Ub2tlbixcclxuICBzd2FwVG9rZW5Ub1Rva2VuLFxyXG59IGZyb20gXCJAL3V0aWxzL2NvbnRleHRcIjtcclxuaW1wb3J0IFN3YXBGaWVsZCBmcm9tIFwiLi9Td2FwRmllbGRcIjtcclxuaW1wb3J0IFRyYW5zYWN0aW9uU3RhdHVzIGZyb20gXCIuL1RyYW5zYWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB0b2FzdCwgeyBUb2FzdGVyIH0gZnJvbSBcInJlYWN0LWhvdC10b2FzdFwiO1xyXG5pbXBvcnQgeyB0b0V0aCwgdG9XZWkgfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBERUZBVUxUX1ZBTFVFLCBFdGggfSBmcm9tIFwiQC91dGlscy9zYWxlVG9rZW5cIjtcclxuaW1wb3J0IHsgdXNlQWNjb3VudCB9IGZyb20gXCJ3YWdtaVwiO1xyXG5pbXBvcnQgeyBDb2cgfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5cclxuY29uc3QgU3dhcENvbXBvbmVudCA9ICgpID0+IHtcclxuICBjb25zdCBbc3JjVG9rZW4sIHNldFNyY1Rva2VuXSA9IHVzZVN0YXRlKEV0aCk7XHJcbiAgY29uc3QgW2Rlc3RUb2tlbiwgc2V0RGVzdFRva2VuXSA9IHVzZVN0YXRlKERFRkFVTFRfVkFMVUUpO1xyXG5cclxuICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtvdXRwdXRWYWx1ZSwgc2V0T3V0cHV0VmFsdWVdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgaW5wdXRWYWx1ZVJlZiA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IG91dHB1dFZhbHVlUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IGlzUmV2ZXJzZWQgPSB1c2VSZWYoZmFsc2UpO1xyXG5cclxuICBjb25zdCBJTkNSRUFTRV9BTExPV0FOQ0UgPSBcIkluY3JlYXNlIGFsbG93YW5jZVwiO1xyXG4gIGNvbnN0IEVOVEVSX0FNT1VOVCA9IFwiRW50ZXIgYW4gYW1vdW50XCI7XHJcbiAgY29uc3QgQ09OTkVDVF9XQUxMRVQgPSBcIkNvbm5lY3Qgd2FsbGV0XCI7XHJcbiAgY29uc3QgU1dBUCA9IFwiU3dhcFwiO1xyXG5cclxuICBjb25zdCBzcmNUb2tlbk9iaiA9IHtcclxuICAgIGlkOiBcInNyY1Rva2VuXCIsXHJcbiAgICB2YWx1ZTogaW5wdXRWYWx1ZSxcclxuICAgIHNldFZhbHVlOiBzZXRJbnB1dFZhbHVlLFxyXG4gICAgZGVmYXVsdFZhbHVlOiBzcmNUb2tlbixcclxuICAgIGlnbm9yZVZhbHVlOiBkZXN0VG9rZW4sXHJcbiAgICBzZXRUb2tlbjogc2V0U3JjVG9rZW4sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGVzdFRva2VuT2JqID0ge1xyXG4gICAgaWQ6IFwiZGVzdFRva2VuXCIsXHJcbiAgICB2YWx1ZTogb3V0cHV0VmFsdWUsXHJcbiAgICBzZXRWYWx1ZTogc2V0T3V0cHV0VmFsdWUsXHJcbiAgICBkZWZhdWx0VmFsdWU6IGRlc3RUb2tlbixcclxuICAgIGlnbm9yZVZhbHVlOiBzcmNUb2tlbixcclxuICAgIHNldFRva2VuOiBzZXREZXN0VG9rZW4sXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgW3NyY1Rva2VuQ29tcCwgc2V0U3JjVG9rZW5Db21wXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2Rlc3RUb2tlbkNvbXAsIHNldERlc3RUb2tlbkNvbXBdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgY29uc3QgW3N3YXBCdG5UZXh0LCBzZXRTd2FwQnRuVGV4dF0gPSB1c2VTdGF0ZShFTlRFUl9BTU9VTlQpO1xyXG4gIGNvbnN0IFt0eFBlbmRpbmcsIHNldFR4UGVuZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG5vdGlmeUVycm9yID0gKG1zZykgPT4gdG9hc3QuZXJyb3IobXNnLCB7IGR1cmF0aW9uOiA2MDAwIH0pO1xyXG4gIGNvbnN0IG5vdGlmeVN1Y2Nlc3MgPSAoKSA9PiB0b2FzdC5zdWNjZXNzKFwiVHJhbnNhY3Rpb24gY29tcGxldGVkLlwiKTtcclxuXHJcbiAgY29uc3QgYWNjb3VudCA9IHVzZUFjY291bnQoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vaGFuZGxpbmcgdGhlIHRleHQgb2YgdGhlIHN1Ym1pdCBidXR0b25cclxuICAgIGlmICghYWNjb3VudCkgc2V0U3dhcEJ0blRleHQoQ09OTkVDVF9XQUxMRVQpO1xyXG4gICAgZWxzZSBpZiAoIWlucHV0VmFsdWUgfHwgIW91dHB1dFZhbHVlKSBzZXRTd2FwQnRuVGV4dChFTlRFUl9BTU9VTlQpO1xyXG4gICAgZWxzZSBzZXRTd2FwQnRuVGV4dChTV0FQKTtcclxuICB9LCBbaW5wdXRWYWx1ZSwgb3V0cHV0VmFsdWUsIGFjY291bnRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAhPT0gb3V0cHV0VmFsdWVSZWYuY3VycmVudCAmJlxyXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmFyaWFMYWJlbCAhPT0gXCJzcmNUb2tlblwiICYmXHJcbiAgICAgICFpc1JldmVyc2VkLmN1cnJlbnRcclxuICAgICkge1xyXG4gICAgICBwb3B1bGF0ZU91dHB1dFZhbHVlKGlucHV0VmFsdWUpO1xyXG5cclxuICAgICAgc2V0U3JjVG9rZW5Db21wKDxTd2FwRmllbGQgb2JqPXtzcmNUb2tlbk9ian0gcmVmPXtpbnB1dFZhbHVlUmVmfSAvPik7XHJcblxyXG4gICAgICBpZiAoaW5wdXRWYWx1ZT8ubGVuZ3RoID09PSAwKSBzZXRPdXRwdXRWYWx1ZShcIlwiKTtcclxuICAgIH1cclxuICB9LCBbaW5wdXRWYWx1ZSwgZGVzdFRva2VuXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgIT09IGlucHV0VmFsdWVSZWYuY3VycmVudCAmJlxyXG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmFyaWFMYWJlbCAhPT0gXCJkZXN0VG9rZW5cIiAmJlxyXG4gICAgICAhaXNSZXZlcnNlZC5jdXJyZW50XHJcbiAgICApIHtcclxuICAgICAgcG9wdWxhdGVJbnB1dFZhbHVlKG91dHB1dFZhbHVlKTtcclxuXHJcbiAgICAgIHNldERlc3RUb2tlbkNvbXAoPFN3YXBGaWVsZCBvYmo9e2Rlc3RUb2tlbk9ian0gcmVmPXtvdXRwdXRWYWx1ZVJlZn0gLz4pO1xyXG5cclxuICAgICAgaWYgKG91dHB1dFZhbHVlPy5sZW5ndGggPT09IDApIHNldElucHV0VmFsdWUoXCJcIik7XHJcblxyXG4gICAgICAvLyBSZXNldHRpbmcgdGhlIGlzUmV2ZXJzZWQgdmFsdWUgaWYgaXRzIHNldFxyXG4gICAgICBpZiAoaXNSZXZlcnNlZC5jdXJyZW50KSBpc1JldmVyc2VkLmN1cnJlbnQgPSBmYWxzZTtcclxuICAgIH1cclxuICB9LCBbb3V0cHV0VmFsdWUsIHNyY1Rva2VuXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJldmVyc2VFeGNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAvLyBzZXR0aW5ncyB0aGUgaXNSZXZlcnNlZCB2YWx1ZSB0byBwcmV2ZW50IHRoZSBpbnB1dC9vdXRwdXQgdmFsdWVzXHJcbiAgICAvLyBiZWluZyBjYWxjdWxhdGVkIGluIHRoZWlyIHJlc3BlY3RpdmUgc2lkZSAtIGVmZmVjdHNcclxuICAgIGlzUmV2ZXJzZWQuY3VycmVudCA9IHRydWU7XHJcblxyXG4gICAgLy8gc3dhcCB0b2tlbiAoc3JjVG9rZW4gPD0+IGRlc3RUb2tlbilcclxuICAgIC8vIHN3YXAgdmFsdWUgKGlucHV0VmFsdWUgPD0+IG91dHB1dFZhbHVlKVxyXG4gICAgc2V0SW5wdXRWYWx1ZShvdXRwdXRWYWx1ZSk7XHJcbiAgICBzZXRPdXRwdXRWYWx1ZShpbnB1dFZhbHVlKTtcclxuXHJcbiAgICBzZXRTcmNUb2tlbihkZXN0VG9rZW4pO1xyXG4gICAgc2V0RGVzdFRva2VuKHNyY1Rva2VuKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTd2FwQnRuQ2xhc3NOYW1lID0gKCkgPT4ge1xyXG4gICAgbGV0IGNsYXNzTmFtZSA9IFwicC00IHctZnVsbCBteS0yIHJvdW5kZWQteGxcIjtcclxuICAgIGNsYXNzTmFtZSArPVxyXG4gICAgICBzd2FwQnRuVGV4dCA9PT0gRU5URVJfQU1PVU5UIHx8IHN3YXBCdG5UZXh0ID09PSBDT05ORUNUX1dBTExFVFxyXG4gICAgICAgID8gXCIgdGV4dC16aW5jLTQwMCBiZy16aW5jLTgwMCBwb2ludGVyLWV2ZW50cy1ub25lXCJcclxuICAgICAgICA6IFwiIGJnLWJsdWUtNzAwXCI7XHJcbiAgICBjbGFzc05hbWUgKz0gc3dhcEJ0blRleHQgPT09IElOQ1JFQVNFX0FMTE9XQU5DRSA/IFwiIGJnLXllbGxvdy02MDBcIiA6IFwiXCI7XHJcbiAgICByZXR1cm4gY2xhc3NOYW1lO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBvcHVsYXRlT3V0cHV0VmFsdWUgPSBhc3luYyAoaW5wdXRWYWx1ZSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICBkZXN0VG9rZW4gPT09IERFRkFVTFRfVkFMVUUgfHxcclxuICAgICAgc3JjVG9rZW4gPT09IERFRkFVTFRfVkFMVUUgfHxcclxuICAgICAgIWlucHV0VmFsdWVcclxuICAgIClcclxuICAgICAgcmV0dXJuO1xyXG4gICAgdHJ5IHtcclxuICAgICAgaWYgKHNyY1Rva2VuICE9PSBFdGggJiYgZGVzdFRva2VuICE9PSBFdGgpIHNldE91dHB1dFZhbHVlKGlucHV0VmFsdWUpO1xyXG4gICAgICBlbHNlIGlmIChzcmNUb2tlbiA9PT0gRXRoICYmIGRlc3RUb2tlbiAhPT0gRXRoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0b0V0aCh0b1dlaShpbnB1dFZhbHVlKSwgMTQpO1xyXG4gICAgICAgIHNldE91dHB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgfSBlbHNlIGlmIChzcmNUb2tlbiAhPT0gRXRoICYmIGRlc3RUb2tlbiA9PT0gRXRoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0b0V0aCh0b1dlaShpbnB1dFZhbHVlKSwgMTQpO1xyXG4gICAgICAgIHNldE91dHB1dFZhbHVlKHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHNldE91dHB1dFZhbHVlKFwiXCIpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBwb3B1bGF0ZUlucHV0VmFsdWUgPSBhc3luYyAob3V0cHV0VmFsdWUpID0+IHtcclxuICAgIGlmIChcclxuICAgICAgZGVzdFRva2VuID09PSBERUZBVUxUX1ZBTFVFIHx8XHJcbiAgICAgIHNyY1Rva2VuID09PSBERUZBVUxUX1ZBTFVFIHx8XHJcbiAgICAgICFvdXRwdXRWYWx1ZVxyXG4gICAgKVxyXG4gICAgICByZXR1cm47XHJcbiAgICB0cnkge1xyXG4gICAgICBpZiAoc3JjVG9rZW4gIT09IEV0aCAmJiBkZXN0VG9rZW4gIT09IEV0aCkgc2V0SW5wdXRWYWx1ZShvdXRwdXRWYWx1ZSk7XHJcbiAgICAgIGVsc2UgaWYgKHNyY1Rva2VuID09PSBFdGggJiYgZGVzdFRva2VuICE9PSBFdGgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRvRXRoKHRvV2VpKG91dHB1dFZhbHVlKSwgMTQpO1xyXG4gICAgICAgIHNldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKHNyY1Rva2VuICE9PSBFdGggJiYgZGVzdFRva2VuID09PSBFdGgpIHtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHRvRXRoKHRvV2VpKG91dHB1dFZhbHVlKSwgMTQpO1xyXG4gICAgICAgIHNldElucHV0VmFsdWUodmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgc2V0SW5wdXRWYWx1ZShcIjBcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSW5jcmVhc2VBbGxvd2FuY2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvLyBpbmNyZWFzZSB0aGUgYWxsb3dhbmNlXHJcbiAgICBzZXRUeFBlbmRpbmcodHJ1ZSk7XHJcbiAgICBhd2FpdCBpbmNyZWFzZUFsbG93YW5jZShzcmNUb2tlbiwgaW5wdXRWYWx1ZSk7XHJcbiAgICBzZXRUeFBlbmRpbmcoZmFsc2UpO1xyXG5cclxuICAgIC8vc2V0IHN3YXBidG4gdG8gJ3N3YXAnIGFnYWluXHJcbiAgICBzZXRTd2FwQnRuVGV4dChTV0FQKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwZXJmb3JtU3dhcCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNldFR4UGVuZGluZyh0cnVlKTtcclxuXHJcbiAgICBsZXQgcmVjZWlwdDtcclxuXHJcbiAgICBpZiAoc3JjVG9rZW4gPT09IEV0aCAmJiBkZXN0VG9rZW4gIT09IEV0aClcclxuICAgICAgcmVjZWlwdCA9IGF3YWl0IHN3YXBFdGhUb1Rva2VuKGRlc3RUb2tlbiwgaW5wdXRWYWx1ZSk7XHJcbiAgICBlbHNlIGlmIChzcmNUb2tlbiAhPT0gRXRoICYmIGRlc3RUb2tlbiA9PT0gRXRoKVxyXG4gICAgICByZWNlaXB0ID0gYXdhaXQgc3dhcFRva2VuVG9FdGgoc3JjVG9rZW4sIGlucHV0VmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN3YXAgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoc3JjVG9rZW4gPT09IEV0aCAmJiBkZXN0VG9rZW4gIT09IEV0aCkge1xyXG4gICAgICBwZXJmb3JtU3dhcCgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gQ2hlY2sgd2hldGhlciB0aGVyZSBpcyBhbGxvd2FuY2Ugd2hlbiB0aGUgc3dhcCBkZWFscyB3aXRoIHRva2VuRXRoL3Rva2VuVG9Ub2tlblxyXG4gICAgICBzZXRUeFBlbmRpbmcodHJ1ZSk7XHJcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGhhc1ZhbGlkQWxsb3dhbmNlKGFjY291bnQsIHNyY1Rva2VuLCBpbnB1dFZhbHVlKTtcclxuICAgICAgc2V0VHhQZW5kaW5nKGZhbHNlKTtcclxuICAgICAgaWYgKHJlc3VsdCkgcGVyZm9ybVN3YXAoKTtcclxuICAgICAgZWxzZSBoYW5kbGVJbnN1ZmZpY2llbnRBbGxvd2FuY2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gcm91bmRlZC1sIGJvcmRlci1bI2ZmZWFhN10gYmctWyNmZmVhYTddIHctWzEwMCVdIHAtNCBweC02IHJvdW5kZWQteGxcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktNCBweC0xXCI+XHJcbiAgICAgICAgPHA+U3dhcDwvcD5cclxuICAgICAgICA8Q29nIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLVsjMjEyNDI5XSBwLTQgcHktNiByb3VuZGVkLXhsIG1iLTIgYm9yZGVyLVsycHhdIGJvcmRlci10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItemluYy02MDBcIj5cclxuICAgICAgICB7c3JjVG9rZW5Db21wfVxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIC1ib3JkZXItNiBoLTEwIHAtMSBiZy1bIzIxMjQyOV0gYm9yZGVyLTQgYm9yZGVyLXppbmMtOTAwIHRleHQtemluYy0zMDAgcm91bmRlZC14bCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xMTBcIlxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlUmV2ZXJzZUV4Y2hhbmdlfVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyMyMTI0MjldIHAtNCBweS02IHJvdW5kZWQteGwgbXQtMiBib3JkZXItWzJweF0gYm9yZGVyLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci16aW5jLTYwMFwiPlxyXG4gICAgICAgIHtkZXN0VG9rZW5Db21wfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U3dhcEJ0bkNsYXNzTmFtZSgpfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgIGlmIChzd2FwQnRuVGV4dCA9PT0gSU5DUkVBU0VfQUxMT1dBTkNFKSBoYW5kbGVJbmNyZWFzZUFsbG93YW5jZSgpO1xyXG4gICAgICAgICAgZWxzZSBpZiAoc3dhcEJ0blRleHQgPT09IFNXQVApIGhhbmRsZVN3YXAoKTtcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge3N3YXBCdG5UZXh0fVxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgICAge3R4UGVuZGluZyAmJiA8VHJhbnNhY3Rpb25TdGF0dXMgLz59XHJcblxyXG4gICAgICA8VG9hc3RlciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN3YXBDb21wb25lbnQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiaGFzVmFsaWRBbGxvd2FuY2UiLCJpbmNyZWFzZUFsbG93YW5jZSIsInN3YXBUb2tlblRvRXRoIiwic3dhcEV0aFRvVG9rZW4iLCJzd2FwVG9rZW5Ub1Rva2VuIiwiU3dhcEZpZWxkIiwiVHJhbnNhY3Rpb25TdGF0dXMiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJ0b0V0aCIsInRvV2VpIiwiREVGQVVMVF9WQUxVRSIsIkV0aCIsInVzZUFjY291bnQiLCJDb2ciLCJTd2FwQ29tcG9uZW50Iiwic3JjVG9rZW4iLCJzZXRTcmNUb2tlbiIsImRlc3RUb2tlbiIsInNldERlc3RUb2tlbiIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwib3V0cHV0VmFsdWUiLCJzZXRPdXRwdXRWYWx1ZSIsImlucHV0VmFsdWVSZWYiLCJvdXRwdXRWYWx1ZVJlZiIsImlzUmV2ZXJzZWQiLCJJTkNSRUFTRV9BTExPV0FOQ0UiLCJFTlRFUl9BTU9VTlQiLCJDT05ORUNUX1dBTExFVCIsIlNXQVAiLCJzcmNUb2tlbk9iaiIsImlkIiwidmFsdWUiLCJzZXRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsImlnbm9yZVZhbHVlIiwic2V0VG9rZW4iLCJkZXN0VG9rZW5PYmoiLCJzcmNUb2tlbkNvbXAiLCJzZXRTcmNUb2tlbkNvbXAiLCJkZXN0VG9rZW5Db21wIiwic2V0RGVzdFRva2VuQ29tcCIsInN3YXBCdG5UZXh0Iiwic2V0U3dhcEJ0blRleHQiLCJ0eFBlbmRpbmciLCJzZXRUeFBlbmRpbmciLCJub3RpZnlFcnJvciIsIm1zZyIsImVycm9yIiwiZHVyYXRpb24iLCJub3RpZnlTdWNjZXNzIiwic3VjY2VzcyIsImFjY291bnQiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJjdXJyZW50IiwiYXJpYUxhYmVsIiwicG9wdWxhdGVPdXRwdXRWYWx1ZSIsIm9iaiIsInJlZiIsImxlbmd0aCIsInBvcHVsYXRlSW5wdXRWYWx1ZSIsImhhbmRsZVJldmVyc2VFeGNoYW5nZSIsImUiLCJnZXRTd2FwQnRuQ2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUluY3JlYXNlQWxsb3dhbmNlIiwicGVyZm9ybVN3YXAiLCJyZWNlaXB0IiwiaGFuZGxlU3dhcCIsInJlc3VsdCIsImhhbmRsZUluc3VmZmljaWVudEFsbG93YW5jZSIsImRpdiIsInAiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/SwapComponent.js\n"));

/***/ })

});