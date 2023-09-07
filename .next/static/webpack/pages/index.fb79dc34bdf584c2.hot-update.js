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

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _locale_switcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locale-switcher */ \"./components/locale-switcher.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n\n\n\n\n\n // Assuming you have a LocaleSwitcher component\n // Import the HiMenu and HiOutlineX icons\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nfunction Navigation() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), navbarOpen = ref[0], setNavbarOpen = ref[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)().t;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var dir = \"ltr\";\n        var lang = router.locale === \"uk\" ? \"uk\" : \"en\";\n        document.querySelector(\"html\").setAttribute(\"dir\", dir);\n        document.querySelector(\"html\").setAttribute(\"lang\", lang);\n    }, [\n        router.locale\n    ]);\n    var toggleNavbar = function() {\n        setNavbarOpen(!navbarOpen);\n    };\n    var closeNavbar = function() {\n        setNavbarOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"bg-white py-3 relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container mx-auto flex items-center justify-between\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    href: \"/\",\n                    passHref: true,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        onClick: closeNavbar,\n                        className: \"text-3xl font-bold text-black relative z-10\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"logo-text text-prata text-xl\",\n                            style: {\n                                fontFamily: \"Prata\",\n                                fontSize: \"30px\"\n                            },\n                            children: \"DOTAIJ\"\n                        }, void 0, false, {\n                            fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: toggleNavbar,\n                        className: \"text-white \".concat(navbarOpen ? \"bg-white\" : \"bg-black\", \" p-2\"),\n                        children: navbarOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiOutlineX, {\n                            size: 30,\n                            style: {\n                                color: \"black\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_hi__WEBPACK_IMPORTED_MODULE_6__.HiMenu, {\n                            size: 30,\n                            style: {\n                                color: \"white\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                            lineNumber: 47,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:flex \".concat(navbarOpen ? \"block\" : \"hidden\", \" md:items-center md:ml-4 mt-4 md:mt-0\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: \"md:h-auto md:flex md:ml-4 space-x-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                path: \"/book\",\n                                text: t(\"header.Books\"),\n                                closeNavbar: closeNavbar\n                            }, void 0, false, {\n                                fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                path: \"/biography\",\n                                text: t(\"header.Biography\"),\n                                closeNavbar: closeNavbar\n                            }, void 0, false, {\n                                fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                path: \"/events\",\n                                text: t(\"header.Events\"),\n                                closeNavbar: closeNavbar\n                            }, void 0, false, {\n                                fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                                lineNumber: 56,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavItem, {\n                                path: \"/contact\",\n                                text: t(\"header.Contact\"),\n                                closeNavbar: closeNavbar\n                            }, void 0, false, {\n                                fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"text-lg md:text-base hover:font-bold\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_locale_switcher__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n};\n_s(Navigation, \"/jDbIWUwvvjYQAz9IdLSyNkxe08=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation\n    ];\n});\n_c = Navigation;\nfunction NavItem(param) {\n    var path = param.path, text = param.text, closeNavbar = param.closeNavbar;\n    _s1();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var isCurrentPage = router.pathname === path;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        className: \"text-lg md:text-base hover:font-bold \".concat(isCurrentPage ? \"font-bold\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n            href: path,\n            passHref: true,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                onClick: closeNavbar,\n                className: \"text-black \".concat(isCurrentPage ? \"font-bold\" : \"\"),\n                children: text\n            }, void 0, false, {\n                fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n                lineNumber: 75,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n            lineNumber: 74,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/amgalangerelsaikhan/Desktop/NextJs/dotaij/components/navigation.js\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, this);\n}\n_s1(NavItem, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c1 = NavItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"Navigation\");\n$RefreshReg$(_c1, \"NavItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtZQUFDb0IsSUFBSSxFQUFFYSxJQUFJO1lBQUVaLFFBQVE7c0JBQ3hCLDRFQUFDQyxHQUFDO2dCQUFDQyxPQUFPLEVBQUVQLFdBQVc7Z0JBQUVFLFNBQVMsRUFBRSxhQUFZLENBQW1DLE9BQWpDa0IsYUFBYSxHQUFHLFdBQVcsR0FBRyxFQUFFLENBQUU7MEJBQ2pGRixJQUFJOzs7OztvQkFDSDs7Ozs7Z0JBQ0M7Ozs7O1lBQ0osQ0FDTDtDQUNIO0lBYlFGLE9BQU87O1FBQ0NsQyxrREFBUzs7O0FBRGpCa0MsTUFBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25hdmlnYXRpb24uanM/MDg0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJuZXh0LWkxOG5leHRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMb2NhbGVTd2l0Y2hlciBmcm9tIFwiLi9sb2NhbGUtc3dpdGNoZXJcIjsgLy8gQXNzdW1pbmcgeW91IGhhdmUgYSBMb2NhbGVTd2l0Y2hlciBjb21wb25lbnRcbmltcG9ydCB7IEhpTWVudSwgSGlPdXRsaW5lWCB9IGZyb20gXCJyZWFjdC1pY29ucy9oaVwiOyAvLyBJbXBvcnQgdGhlIEhpTWVudSBhbmQgSGlPdXRsaW5lWCBpY29uc1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKCkge1xuICBjb25zdCBbbmF2YmFyT3Blbiwgc2V0TmF2YmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgZGlyID0gXCJsdHJcIjtcbiAgICBsZXQgbGFuZyA9IHJvdXRlci5sb2NhbGUgPT09IFwidWtcIiA/IFwidWtcIiA6IFwiZW5cIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5zZXRBdHRyaWJ1dGUoXCJkaXJcIiwgZGlyKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaHRtbFwiKS5zZXRBdHRyaWJ1dGUoXCJsYW5nXCIsIGxhbmcpO1xuICB9LCBbcm91dGVyLmxvY2FsZV0pO1xuXG4gIGNvbnN0IHRvZ2dsZU5hdmJhciA9ICgpID0+IHtcbiAgICBzZXROYXZiYXJPcGVuKCFuYXZiYXJPcGVuKTtcbiAgfTtcblxuICBjb25zdCBjbG9zZU5hdmJhciA9ICgpID0+IHtcbiAgICBzZXROYXZiYXJPcGVuKGZhbHNlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHktMyByZWxhdGl2ZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBwYXNzSHJlZj5cbiAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZU5hdmJhcn0gY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtYmxhY2sgcmVsYXRpdmUgei0xMFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibG9nby10ZXh0IHRleHQtcHJhdGEgdGV4dC14bFwiIHN0eWxlPXt7IGZvbnRGYW1pbHk6ICdQcmF0YScsIGZvbnRTaXplOiAnMzBweCcgfX0+XG4gICAgICAgICAgICAgIERPVEFJSlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6aGlkZGVuXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTmF2YmFyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSAke25hdmJhck9wZW4gPyAnYmctd2hpdGUnIDogJ2JnLWJsYWNrJ30gcC0yYH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7bmF2YmFyT3BlbiA/IChcbiAgICAgICAgICAgICAgPEhpT3V0bGluZVggc2l6ZT17MzB9IHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0gLz5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxIaU1lbnUgc2l6ZT17MzB9IHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbWQ6ZmxleCAke25hdmJhck9wZW4gPyAnYmxvY2snIDogJ2hpZGRlbid9IG1kOml0ZW1zLWNlbnRlciBtZDptbC00IG10LTQgbWQ6bXQtMGB9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZDpoLWF1dG8gbWQ6ZmxleCBtZDptbC00IHNwYWNlLXgtNFwiPlxuICAgICAgICAgICAgPE5hdkl0ZW0gcGF0aD1cIi9ib29rXCIgdGV4dD17dCgnaGVhZGVyLkJvb2tzJyl9IGNsb3NlTmF2YmFyPXtjbG9zZU5hdmJhcn0gLz5cbiAgICAgICAgICAgIDxOYXZJdGVtIHBhdGg9XCIvYmlvZ3JhcGh5XCIgdGV4dD17dCgnaGVhZGVyLkJpb2dyYXBoeScpfSBjbG9zZU5hdmJhcj17Y2xvc2VOYXZiYXJ9IC8+XG4gICAgICAgICAgICA8TmF2SXRlbSBwYXRoPVwiL2V2ZW50c1wiIHRleHQ9e3QoJ2hlYWRlci5FdmVudHMnKX0gY2xvc2VOYXZiYXI9e2Nsb3NlTmF2YmFyfSAvPlxuICAgICAgICAgICAgPE5hdkl0ZW0gcGF0aD1cIi9jb250YWN0XCIgdGV4dD17dCgnaGVhZGVyLkNvbnRhY3QnKX0gY2xvc2VOYXZiYXI9e2Nsb3NlTmF2YmFyfSAvPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtbGcgbWQ6dGV4dC1iYXNlIGhvdmVyOmZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICA8TG9jYWxlU3dpdGNoZXIgLz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gTmF2SXRlbSh7IHBhdGgsIHRleHQsIGNsb3NlTmF2YmFyIH0pIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGlzQ3VycmVudFBhZ2UgPSByb3V0ZXIucGF0aG5hbWUgPT09IHBhdGg7XG5cbiAgcmV0dXJuIChcbiAgICA8bGkgY2xhc3NOYW1lPXtgdGV4dC1sZyBtZDp0ZXh0LWJhc2UgaG92ZXI6Zm9udC1ib2xkICR7aXNDdXJyZW50UGFnZSA/ICdmb250LWJvbGQnIDogJyd9YH0+XG4gICAgICA8TGluayBocmVmPXtwYXRofSBwYXNzSHJlZj5cbiAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZiYXJ9IGNsYXNzTmFtZT17YHRleHQtYmxhY2sgJHtpc0N1cnJlbnRQYWdlID8gJ2ZvbnQtYm9sZCcgOiAnJ31gfT5cbiAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZVRyYW5zbGF0aW9uIiwiTGluayIsIkxvY2FsZVN3aXRjaGVyIiwiSGlNZW51IiwiSGlPdXRsaW5lWCIsIk5hdmlnYXRpb24iLCJuYXZiYXJPcGVuIiwic2V0TmF2YmFyT3BlbiIsInJvdXRlciIsInQiLCJkaXIiLCJsYW5nIiwibG9jYWxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwidG9nZ2xlTmF2YmFyIiwiY2xvc2VOYXZiYXIiLCJuYXYiLCJjbGFzc05hbWUiLCJkaXYiLCJocmVmIiwicGFzc0hyZWYiLCJhIiwib25DbGljayIsInNwYW4iLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImJ1dHRvbiIsInNpemUiLCJjb2xvciIsInVsIiwiTmF2SXRlbSIsInBhdGgiLCJ0ZXh0IiwibGkiLCJpc0N1cnJlbnRQYWdlIiwicGF0aG5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navigation.js\n"));

/***/ })

});