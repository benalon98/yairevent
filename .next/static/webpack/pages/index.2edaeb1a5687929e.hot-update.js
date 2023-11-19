/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layouts/Layouts.js":
/*!********************************!*\
  !*** ./src/layouts/Layouts.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_scrollAnims__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/scrollAnims */ \"./src/common/scrollAnims.js\");\n/* harmony import */ var _common_preloader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/preloader */ \"./src/common/preloader.js\");\n/* harmony import */ var _common_counters__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/counters */ \"./src/common/counters.js\");\n/* harmony import */ var _common_parallax__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/parallax */ \"./src/common/parallax.js\");\n/* harmony import */ var _common_utilits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/utilits */ \"./src/common/utilits.js\");\n/* harmony import */ var _footers_Index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footers/Index */ \"./src/layouts/footers/Index.js\");\n/* harmony import */ var _headers_Index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./headers/Index */ \"./src/layouts/headers/Index.js\");\n/* harmony import */ var _preloader_Index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./preloader/Index */ \"./src/layouts/preloader/Index.jsx\");\n/* harmony import */ var _left_bar_Index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./left-bar/Index */ \"./src/layouts/left-bar/Index.jsx\");\n/* harmony import */ var _right_bar_Index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./right-bar/Index */ \"./src/layouts/right-bar/Index.jsx\");\n/* harmony import */ var _right_bar_Index__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_right_bar_Index__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _back_to_top_Index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./back-to-top/Index */ \"./src/layouts/back-to-top/Index.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst Layouts = (param)=>{\n    let { children , header , footer , noHeader , noFooter , fullWidth , rightPanelBackground , rightPanelImg , fullWidth100 , extraClass  } = param;\n    _s();\n    let bodyClass = false;\n    let containerClass = false;\n    if (fullWidth && fullWidth100) {\n        bodyClass = [\n            \"mil-fw-page\",\n            \"mil-100-page\"\n        ];\n        containerClass = \"mil-container-100\";\n    } else if (fullWidth) {\n        bodyClass = \"mil-fw-page\";\n        containerClass = \"mil-container-fw\";\n    } else {\n        bodyClass = false;\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        //preloaderAnimation();\n        (0,_common_scrollAnims__WEBPACK_IMPORTED_MODULE_2__.scrollAnimation)();\n        (0,_common_counters__WEBPACK_IMPORTED_MODULE_4__.countersAnimation)();\n        (0,_common_parallax__WEBPACK_IMPORTED_MODULE_5__.parallaxAnimation)();\n        (0,_common_utilits__WEBPACK_IMPORTED_MODULE_6__.anchorSscroll)();\n        if (document != undefined && bodyClass) {\n            document.querySelector(\"body\").classList.add(...bodyClass);\n        } else {\n            document.querySelector(\"body\").classList.remove(\"mil-fw-page\");\n            document.querySelector(\"body\").classList.remove(\"mil-100-page\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mil-wrapper\",\n        id: \"top\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mil-frame\",\n                children: [\n                    !noHeader && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headers_Index__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                        layout: header,\n                        extraclassName: extraClass\n                    }, void 0, false, {\n                        fileName: \"/Users/benargaman/Downloads/courtney-react-personal-portfolio-resume-nextjs-2023-11-15-13-35-11-utc/courtney/src/layouts/Layouts.js\",\n                        lineNumber: 60,\n                        columnNumber: 23\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_back_to_top_Index__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/benargaman/Downloads/courtney-react-personal-portfolio-resume-nextjs-2023-11-15-13-35-11-utc/courtney/src/layouts/Layouts.js\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/benargaman/Downloads/courtney-react-personal-portfolio-resume-nextjs-2023-11-15-13-35-11-utc/courtney/src/layouts/Layouts.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mil-content\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mil-scroll-wrapper transition-fade\",\n                        id: \"swupMain\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: containerClass ? containerClass : \"mil-container\",\n                            children: children\n                        }, void 0, false, {\n                            fileName: \"/Users/benargaman/Downloads/courtney-react-personal-portfolio-resume-nextjs-2023-11-15-13-35-11-utc/courtney/src/layouts/Layouts.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/benargaman/Downloads/courtney-react-personal-portfolio-resume-nextjs-2023-11-15-13-35-11-utc/courtney/src/layouts/Layouts.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined),\n                    !fullWidth && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_right_bar_Index__WEBPACK_IMPORTED_MODULE_11___default()), {\n                        background: rightPanelBackground,\n                        img: rightPanelImg\n                    }, void 0, false, {\n                        fileName: \"/Users/benargaman/Downloads/courtney-react-personal-portfolio-resume-nextjs-2023-11-15-13-35-11-utc/courtney/src/layouts/Layouts.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/benargaman/Downloads/courtney-react-personal-portfolio-resume-nextjs-2023-11-15-13-35-11-utc/courtney/src/layouts/Layouts.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/benargaman/Downloads/courtney-react-personal-portfolio-resume-nextjs-2023-11-15-13-35-11-utc/courtney/src/layouts/Layouts.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Layouts, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Layouts;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layouts);\nvar _c;\n$RefreshReg$(_c, \"Layouts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9MYXlvdXRzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDc0I7QUFDQztBQUNGO0FBQ0E7QUFDTDtBQUViO0FBQ0E7QUFDSztBQUNEO0FBQ0U7QUFDQztBQUU1QyxNQUFNWSxVQUFVLFNBV1Y7UUFYVyxFQUNmQyxTQUFRLEVBQ1JDLE9BQU0sRUFDTkMsT0FBTSxFQUNOQyxTQUFRLEVBQ1JDLFNBQVEsRUFDUkMsVUFBUyxFQUNUQyxxQkFBb0IsRUFDcEJDLGNBQWEsRUFDYkMsYUFBWSxFQUNaQyxXQUFVLEVBQ1g7O0lBQ0MsSUFBSUMsWUFBWSxLQUFLO0lBQ3JCLElBQUlDLGlCQUFpQixLQUFLO0lBRTFCLElBQUlOLGFBQWFHLGNBQWM7UUFDN0JFLFlBQVk7WUFBQztZQUFlO1NBQWU7UUFDM0NDLGlCQUFpQjtJQUNuQixPQUFPLElBQUlOLFdBQVc7UUFDcEJLLFlBQVk7UUFDWkMsaUJBQWlCO0lBQ25CLE9BQU87UUFDTEQsWUFBWSxLQUFLO0lBQ25CLENBQUM7SUFFRHZCLGdEQUFTQSxDQUFDLElBQU07UUFDZCx1QkFBdUI7UUFDdkJDLG9FQUFlQTtRQUNmRSxtRUFBaUJBO1FBQ2pCQyxtRUFBaUJBO1FBQ2pCQyw4REFBYUE7UUFFYixJQUFJb0IsWUFBWUMsYUFBYUgsV0FBVztZQUN0Q0UsU0FBU0UsYUFBYSxDQUFDLFFBQVFDLFNBQVMsQ0FBQ0MsR0FBRyxJQUFJTjtRQUNsRCxPQUFPO1lBQ0xFLFNBQVNFLGFBQWEsQ0FBQyxRQUFRQyxTQUFTLENBQUNFLE1BQU0sQ0FBQztZQUNoREwsU0FBU0UsYUFBYSxDQUFDLFFBQVFDLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDO1FBQ2xELENBQUM7SUFDSCxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFjQyxJQUFHOzswQkFHOUIsOERBQUNGO2dCQUFJQyxXQUFVOztvQkFDWixDQUFDaEIsMEJBQVksOERBQUNULHNEQUFNQTt3QkFBQzJCLFFBQVFwQjt3QkFBUXFCLGdCQUFnQmI7Ozs7OztrQ0FFdEQsOERBQUNYLDJEQUFTQTs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNvQjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO3dCQUFxQ0MsSUFBRztrQ0FDckQsNEVBQUNGOzRCQUFJQyxXQUFXUixpQkFBaUJBLGlCQUFpQixlQUFlO3NDQUM5RFg7Ozs7Ozs7Ozs7O29CQUlKLENBQUNLLDJCQUNBLDhEQUFDUiwwREFBVUE7d0JBQUMwQixZQUFZakI7d0JBQXNCa0IsS0FBS2pCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLN0Q7R0EvRE1SO0tBQUFBO0FBZ0VOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL0xheW91dHMuanM/NmI4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2Nyb2xsQW5pbWF0aW9uIH0gZnJvbSBcIi4uL2NvbW1vbi9zY3JvbGxBbmltc1wiO1xyXG5pbXBvcnQgeyBwcmVsb2FkZXJBbmltYXRpb24gfSBmcm9tIFwiLi4vY29tbW9uL3ByZWxvYWRlclwiO1xyXG5pbXBvcnQgeyBjb3VudGVyc0FuaW1hdGlvbiB9IGZyb20gXCIuLi9jb21tb24vY291bnRlcnNcIjtcclxuaW1wb3J0IHsgcGFyYWxsYXhBbmltYXRpb24gfSBmcm9tIFwiLi4vY29tbW9uL3BhcmFsbGF4XCI7XHJcbmltcG9ydCB7IGFuY2hvclNzY3JvbGwgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWxpdHNcIjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vZm9vdGVycy9JbmRleFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2hlYWRlcnMvSW5kZXhcIjtcclxuaW1wb3J0IFByZWxvYWRlciBmcm9tIFwiLi9wcmVsb2FkZXIvSW5kZXhcIjtcclxuaW1wb3J0IExlZnRQYW5lbCBmcm9tIFwiLi9sZWZ0LWJhci9JbmRleFwiO1xyXG5pbXBvcnQgUmlnaHRQYW5lbCBmcm9tIFwiLi9yaWdodC1iYXIvSW5kZXhcIjtcclxuaW1wb3J0IEJhY2tUb1RvcCBmcm9tIFwiLi9iYWNrLXRvLXRvcC9JbmRleFwiO1xyXG5cclxuY29uc3QgTGF5b3V0cyA9ICh7XHJcbiAgY2hpbGRyZW4sXHJcbiAgaGVhZGVyLFxyXG4gIGZvb3RlcixcclxuICBub0hlYWRlcixcclxuICBub0Zvb3RlcixcclxuICBmdWxsV2lkdGgsXHJcbiAgcmlnaHRQYW5lbEJhY2tncm91bmQsXHJcbiAgcmlnaHRQYW5lbEltZyxcclxuICBmdWxsV2lkdGgxMDAsXHJcbiAgZXh0cmFDbGFzcyxcclxufSkgPT4ge1xyXG4gIGxldCBib2R5Q2xhc3MgPSBmYWxzZTtcclxuICBsZXQgY29udGFpbmVyQ2xhc3MgPSBmYWxzZTtcclxuXHJcbiAgaWYgKGZ1bGxXaWR0aCAmJiBmdWxsV2lkdGgxMDApIHtcclxuICAgIGJvZHlDbGFzcyA9IFtcIm1pbC1mdy1wYWdlXCIsIFwibWlsLTEwMC1wYWdlXCJdO1xyXG4gICAgY29udGFpbmVyQ2xhc3MgPSBcIm1pbC1jb250YWluZXItMTAwXCI7XHJcbiAgfSBlbHNlIGlmIChmdWxsV2lkdGgpIHtcclxuICAgIGJvZHlDbGFzcyA9IFwibWlsLWZ3LXBhZ2VcIjtcclxuICAgIGNvbnRhaW5lckNsYXNzID0gXCJtaWwtY29udGFpbmVyLWZ3XCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJvZHlDbGFzcyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vcHJlbG9hZGVyQW5pbWF0aW9uKCk7XHJcbiAgICBzY3JvbGxBbmltYXRpb24oKTtcclxuICAgIGNvdW50ZXJzQW5pbWF0aW9uKCk7XHJcbiAgICBwYXJhbGxheEFuaW1hdGlvbigpO1xyXG4gICAgYW5jaG9yU3Njcm9sbCgpO1xyXG5cclxuICAgIGlmIChkb2N1bWVudCAhPSB1bmRlZmluZWQgJiYgYm9keUNsYXNzKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5hZGQoLi4uYm9keUNsYXNzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJtaWwtZnctcGFnZVwiKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIikuY2xhc3NMaXN0LnJlbW92ZShcIm1pbC0xMDAtcGFnZVwiKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbC13cmFwcGVyXCIgaWQ9XCJ0b3BcIj5cclxuICAgICAgey8qIDxQcmVsb2FkZXIgLz4gKi99XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbC1mcmFtZVwiPlxyXG4gICAgICAgIHshbm9IZWFkZXIgJiYgPEhlYWRlciBsYXlvdXQ9e2hlYWRlcn0gZXh0cmFjbGFzc05hbWU9e2V4dHJhQ2xhc3N9IC8+fVxyXG5cclxuICAgICAgICA8QmFja1RvVG9wIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWwtY29udGVudFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlsLXNjcm9sbC13cmFwcGVyIHRyYW5zaXRpb24tZmFkZVwiIGlkPVwic3d1cE1haW5cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjb250YWluZXJDbGFzcyA/IGNvbnRhaW5lckNsYXNzIDogXCJtaWwtY29udGFpbmVyXCJ9PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgeyFmdWxsV2lkdGggJiYgKFxyXG4gICAgICAgICAgPFJpZ2h0UGFuZWwgYmFja2dyb3VuZD17cmlnaHRQYW5lbEJhY2tncm91bmR9IGltZz17cmlnaHRQYW5lbEltZ30gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IExheW91dHM7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJzY3JvbGxBbmltYXRpb24iLCJwcmVsb2FkZXJBbmltYXRpb24iLCJjb3VudGVyc0FuaW1hdGlvbiIsInBhcmFsbGF4QW5pbWF0aW9uIiwiYW5jaG9yU3Njcm9sbCIsIkZvb3RlciIsIkhlYWRlciIsIlByZWxvYWRlciIsIkxlZnRQYW5lbCIsIlJpZ2h0UGFuZWwiLCJCYWNrVG9Ub3AiLCJMYXlvdXRzIiwiY2hpbGRyZW4iLCJoZWFkZXIiLCJmb290ZXIiLCJub0hlYWRlciIsIm5vRm9vdGVyIiwiZnVsbFdpZHRoIiwicmlnaHRQYW5lbEJhY2tncm91bmQiLCJyaWdodFBhbmVsSW1nIiwiZnVsbFdpZHRoMTAwIiwiZXh0cmFDbGFzcyIsImJvZHlDbGFzcyIsImNvbnRhaW5lckNsYXNzIiwiZG9jdW1lbnQiLCJ1bmRlZmluZWQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJsYXlvdXQiLCJleHRyYWNsYXNzTmFtZSIsImJhY2tncm91bmQiLCJpbWciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layouts/Layouts.js\n"));

/***/ }),

/***/ "./src/layouts/right-bar/Index.jsx":
/*!*****************************************!*\
  !*** ./src/layouts/right-bar/Index.jsx ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// const rightPanelModule = ( { background, img } ) => {\n//     return (\n//         <>\n//         <div className=\"mil-right-banner\" id=\"scene\">\n//             {/* scrollbar */}\n//             <div className=\"mil-progress-track\">\n//                 <div className=\"mil-progress\" />\n//             </div>\n//             {/* scrollbar end */}\n//             <div className=\"mil-banner-wrapper\" data-depth=\"1\">\n//                 <div id=\"swupBg\" className=\"mil-banner-frame\">\n//                     <img src={background} alt=\"background\" className={img ? \"mil-banner-bg mil-blur\" : \"mil-banner-bg\"} />\n//                 </div>\n//             </div>\n//             <div className=\"mil-banner-wrapper\" data-depth=\"0.2\">\n//                 {img != undefined &&\n//                 <div id=\"swupPerson\" className=\"mil-banner-frame\">\n//                     <img src={img} alt=\"person\" className=\"mil-banner-person\" />\n//                 </div>\n//                 }\n//             </div>\n//             <div className=\"mil-flying-skills\" data-depth=\"0.1\">\n//                 {img != undefined &&\n//                 <div id=\"swupSkills\" className=\"mil-skills-frame\">\n//                     <div className=\"mil-item\" style={{\"top\": \"30%\", \"left\": \"10%\"}}>\n//                         <img src=\"/img/logos/1.jpg\" alt=\"logo\" />\n//                     </div>\n//                     <div className=\"mil-item\" style={{\"bottom\": \"15%\", \"left\": \"20%\"}}>\n//                         <img src=\"/img/logos/2.jpg\" alt=\"logo\" />\n//                     </div>\n//                     <div className=\"mil-item\" style={{\"bottom\": \"45%\", \"right\": \"15%\"}}>\n//                         <img src=\"/img/logos/3.jpg\" alt=\"logo\" />\n//                     </div>\n//                     <div className=\"mil-el mil-addition-el-1\">+</div>\n//                     <div className=\"mil-el mil-addition-el-2\">+</div>\n//                     <div className=\"mil-el mil-addition-el-3\" />\n//                     <div className=\"mil-el mil-addition-el-4\" />\n//                 </div>\n//                 }\n//             </div>\n//         </div>\n//         </>\n//     );\n// };\n// export default rightPanelModule;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGF5b3V0cy9yaWdodC1iYXIvSW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiJBQUFBLHdEQUF3RDtBQUN4RCxlQUFlO0FBQ2YsYUFBYTtBQUNiLHdEQUF3RDtBQUN4RCxnQ0FBZ0M7QUFDaEMsbURBQW1EO0FBQ25ELG1EQUFtRDtBQUNuRCxxQkFBcUI7QUFDckIsb0NBQW9DO0FBQ3BDLGtFQUFrRTtBQUNsRSxpRUFBaUU7QUFDakUsNkhBQTZIO0FBQzdILHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckIsb0VBQW9FO0FBQ3BFLHVDQUF1QztBQUN2QyxxRUFBcUU7QUFDckUsbUZBQW1GO0FBQ25GLHlCQUF5QjtBQUN6QixvQkFBb0I7QUFDcEIscUJBQXFCO0FBQ3JCLG1FQUFtRTtBQUNuRSx1Q0FBdUM7QUFDdkMscUVBQXFFO0FBQ3JFLHVGQUF1RjtBQUN2RixvRUFBb0U7QUFDcEUsNkJBQTZCO0FBQzdCLDBGQUEwRjtBQUMxRixvRUFBb0U7QUFDcEUsNkJBQTZCO0FBQzdCLDJGQUEyRjtBQUMzRixvRUFBb0U7QUFDcEUsNkJBQTZCO0FBRTdCLHdFQUF3RTtBQUN4RSx3RUFBd0U7QUFDeEUsbUVBQW1FO0FBQ25FLG1FQUFtRTtBQUNuRSx5QkFBeUI7QUFDekIsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakIsY0FBYztBQUNkLFNBQVM7QUFDVCxLQUFLO0FBQ0wsbUNBQW1DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL3JpZ2h0LWJhci9JbmRleC5qc3g/YWI4MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCByaWdodFBhbmVsTW9kdWxlID0gKCB7IGJhY2tncm91bmQsIGltZyB9ICkgPT4ge1xuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICAgIDw+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlsLXJpZ2h0LWJhbm5lclwiIGlkPVwic2NlbmVcIj5cbi8vICAgICAgICAgICAgIHsvKiBzY3JvbGxiYXIgKi99XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbC1wcm9ncmVzcy10cmFja1wiPlxuLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlsLXByb2dyZXNzXCIgLz5cbi8vICAgICAgICAgICAgIDwvZGl2PlxuLy8gICAgICAgICAgICAgey8qIHNjcm9sbGJhciBlbmQgKi99XG4vLyAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbC1iYW5uZXItd3JhcHBlclwiIGRhdGEtZGVwdGg9XCIxXCI+XG4vLyAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN3dXBCZ1wiIGNsYXNzTmFtZT1cIm1pbC1iYW5uZXItZnJhbWVcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2JhY2tncm91bmR9IGFsdD1cImJhY2tncm91bmRcIiBjbGFzc05hbWU9e2ltZyA/IFwibWlsLWJhbm5lci1iZyBtaWwtYmx1clwiIDogXCJtaWwtYmFubmVyLWJnXCJ9IC8+XG4vLyAgICAgICAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlsLWJhbm5lci13cmFwcGVyXCIgZGF0YS1kZXB0aD1cIjAuMlwiPlxuLy8gICAgICAgICAgICAgICAgIHtpbWcgIT0gdW5kZWZpbmVkICYmXG4vLyAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInN3dXBQZXJzb25cIiBjbGFzc05hbWU9XCJtaWwtYmFubmVyLWZyYW1lXCI+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cInBlcnNvblwiIGNsYXNzTmFtZT1cIm1pbC1iYW5uZXItcGVyc29uXCIgLz5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlsLWZseWluZy1za2lsbHNcIiBkYXRhLWRlcHRoPVwiMC4xXCI+XG4vLyAgICAgICAgICAgICAgICAge2ltZyAhPSB1bmRlZmluZWQgJiZcbi8vICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3d1cFNraWxsc1wiIGNsYXNzTmFtZT1cIm1pbC1za2lsbHMtZnJhbWVcIj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWwtaXRlbVwiIHN0eWxlPXt7XCJ0b3BcIjogXCIzMCVcIiwgXCJsZWZ0XCI6IFwiMTAlXCJ9fT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9sb2dvcy8xLmpwZ1wiIGFsdD1cImxvZ29cIiAvPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWwtaXRlbVwiIHN0eWxlPXt7XCJib3R0b21cIjogXCIxNSVcIiwgXCJsZWZ0XCI6IFwiMjAlXCJ9fT5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9sb2dvcy8yLmpwZ1wiIGFsdD1cImxvZ29cIiAvPlxuLy8gICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWwtaXRlbVwiIHN0eWxlPXt7XCJib3R0b21cIjogXCI0NSVcIiwgXCJyaWdodFwiOiBcIjE1JVwifX0+XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbG9nb3MvMy5qcGdcIiBhbHQ9XCJsb2dvXCIgLz5cbi8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbi8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaWwtZWwgbWlsLWFkZGl0aW9uLWVsLTFcIj4rPC9kaXY+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlsLWVsIG1pbC1hZGRpdGlvbi1lbC0yXCI+KzwvZGl2PlxuLy8gICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbC1lbCBtaWwtYWRkaXRpb24tZWwtM1wiIC8+XG4vLyAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWlsLWVsIG1pbC1hZGRpdGlvbi1lbC00XCIgLz5cbi8vICAgICAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIDwvPlxuLy8gICAgICk7XG4vLyB9O1xuLy8gZXhwb3J0IGRlZmF1bHQgcmlnaHRQYW5lbE1vZHVsZTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/layouts/right-bar/Index.jsx\n"));

/***/ })

});