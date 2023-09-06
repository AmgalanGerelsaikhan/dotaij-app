"use strict";
exports.id = 813;
exports.ids = [813];
exports.modules = {

/***/ 6151:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);



function Footer() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "w-full h-48 bg-gray-300 text-black-100",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "sm:px-16 px-6 py-10",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col justify-start items-start gap-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/dotaij-logo.png",
                            alt: "logo",
                            width: 120,
                            height: 30,
                            className: "object-contain"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "text-base text-gray-700",
                            children: t("footer.title")
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "",
                    children: [
                        t("footer.copyright"),
                        " \xa9"
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 3427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./components/locale-switcher.js



function LocaleSwitcher() {
    const router = (0,router_.useRouter)();
    const { locales , locale: activeLocale  } = router;
    const otherLocales = locales?.filter((locale)=>locale !== activeLocale && locale !== "default");
    const handleClick = ()=>{};
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "text-muted cursor-pointer",
        children: otherLocales?.map((locale)=>{
            const { pathname , query , asPath  } = router;
            return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: {
                        pathname,
                        query
                    },
                    as: asPath,
                    locale: locale,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        children: locale === "uk" ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/uk.png",
                            alt: "ukraine language icon",
                            height: 30,
                            width: 30
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "/en.png",
                            alt: "english language icon",
                            height: 30,
                            width: 30
                        })
                    })
                }, "locale-" + locale)
            }, "locale-" + locale);
        })
    });
};

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/menu.js




function Menu({ navbar , setNavbar  }) {
    // const [navbar, setNavbar] = useState(false)
    const { t  } = useTranslation("");
    return /*#__PURE__*/ _jsx("div", {
        className: `md:block ${navbar ? "block" : "hidden"} md:right-0`,
        children: /*#__PURE__*/ _jsxs("ul", {
            className: "md:h-auto md:flex cursor-pointer",
            children: [
                /*#__PURE__*/ _jsx(Link, {
                    href: "/book",
                    onClick: ()=>setNavbar(!navbar),
                    children: /*#__PURE__*/ _jsx("li", {
                        className: "text-xl px-6 text-center py-5 md:hover:bg-transparent hover:font-bold",
                        children: t("header.Books")
                    })
                }),
                /*#__PURE__*/ _jsx(Link, {
                    href: "/biography",
                    onClick: ()=>setNavbar(!navbar),
                    children: /*#__PURE__*/ _jsx("li", {
                        className: "text-xl px-6 text-center py-5 md:hover:bg-transparent hover:font-bold",
                        children: t("header.Biography")
                    })
                }),
                /*#__PURE__*/ _jsx(Link, {
                    href: "/events",
                    onClick: ()=>setNavbar(!navbar),
                    children: /*#__PURE__*/ _jsx("li", {
                        className: "text-xl px-6 text-center py-5 md:hover:bg-transparent hover:font-bold",
                        children: t("header.Events")
                    })
                }),
                /*#__PURE__*/ _jsx(Link, {
                    href: "/contact",
                    onClick: ()=>setNavbar(!navbar),
                    children: /*#__PURE__*/ _jsx("li", {
                        className: "text-xl px-6 text-center py-5 md:hover:bg-transparent hover:font-bold",
                        children: t("header.Contact")
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/navigation.js








function Navigation() {
    const { 0: navbar , 1: setNavbar  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { t  } = (0,external_next_i18next_.useTranslation)("");
    (0,external_react_.useEffect)(()=>{
        let dir = "ltr";
        let lang = router.locale == "uk" ? "uk" : "en";
        document.querySelector("html").setAttribute("dir", dir);
        document.querySelector("html").setAttribute("lang", lang);
    }, [
        router.locale
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full bg-gray-300 px-5 py-2",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-end px-5 md:px-10",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(LocaleSwitcher, {})
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "px-5",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-between md:py-1 ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/",
                                        className: "",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: "/dotaij-logo.png",
                                            alt: "logo",
                                            width: 180,
                                            height: 20,
                                            className: "object-contain"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: `md:block ${navbar ? "block" : "hidden"}`,
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "md:h-auto md:flex cursor-pointer md:mt-1 mt-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/book",
                                                onClick: ()=>setNavbar(!navbar),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-xl px-6 text-center py-5 md:py-2 md:hover:bg-transparent hover:font-bold",
                                                    children: t("header.Books")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/biography",
                                                onClick: ()=>setNavbar(!navbar),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-xl px-6 text-center py-5 md:py-2 md:hover:bg-transparent hover:font-bold",
                                                    children: t("header.Biography")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/events",
                                                onClick: ()=>setNavbar(!navbar),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-xl px-6 text-center py-5 md:py-2 md:hover:bg-transparent hover:font-bold",
                                                    children: t("header.Events")
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/contact",
                                                onClick: ()=>setNavbar(!navbar),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-xl px-6 text-center py-5 md:py-2 md:hover:bg-transparent hover:font-bold",
                                                    children: t("header.Contact")
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "md:hidden py-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "py-3 rounded-md",
                                        onClick: ()=>setNavbar(!navbar),
                                        children: navbar ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/close.svg",
                                            width: 30,
                                            height: 30,
                                            alt: "close icon button"
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/menu.svg",
                                            width: 30,
                                            height: 30,
                                            alt: "menu icon button"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};


/***/ })

};
;