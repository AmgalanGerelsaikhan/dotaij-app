"use strict";
exports.id = 121;
exports.ids = [121];
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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);




function Footer() {
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: "bg-gray-300 py-6",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container mx-auto flex flex-col items-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/book",
                                    children: "Books"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/biography",
                                    children: "Biography"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/events",
                                    children: "Events"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    href: "/contact",
                                    children: "Contact"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex gap-4",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaFacebook, {
                                size: 20,
                                style: {
                                    color: "black"
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTwitter, {
                                size: 20,
                                style: {
                                    color: "black"
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInstagram, {
                                size: 20,
                                style: {
                                    color: "black"
                                }
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text-center text-gray-700 text-xs mt-4",
                    children: [
                        t("footer.copyright"),
                        " \xa9 2000 - 2024 Do Taij Mogul"
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 8473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Navigation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(1377);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
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

// EXTERNAL MODULE: external "react-icons/hi"
var hi_ = __webpack_require__(1111);
;// CONCATENATED MODULE: ./components/navigation.js





 // Assuming you have a LocaleSwitcher component
 // Import the HiMenu and HiOutlineX icons
function Navigation() {
    const { 0: navbarOpen , 1: setNavbarOpen  } = (0,external_react_.useState)(false);
    const router = (0,router_.useRouter)();
    const { t  } = (0,external_next_i18next_.useTranslation)();
    (0,external_react_.useEffect)(()=>{
        let dir = "ltr";
        let lang = router.locale === "uk" ? "uk" : "en";
        document.querySelector("html").setAttribute("dir", dir);
        document.querySelector("html").setAttribute("lang", lang);
    }, [
        router.locale
    ]);
    const toggleNavbar = ()=>{
        setNavbarOpen(!navbarOpen);
    };
    const closeNavbar = ()=>{
        setNavbarOpen(false);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "bg-white py-3 relative",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto flex items-center justify-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        onClick: closeNavbar,
                        className: "text-3xl font-bold text-black relative z-10",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "logo-text text-prata text-xl",
                            style: {
                                fontFamily: "Prata",
                                fontSize: "30px"
                            },
                            children: "DOTAIJ"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "md:hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: toggleNavbar,
                        className: `text-white ${navbarOpen ? "bg-white" : "bg-white"} p-2`,
                        children: navbarOpen ? /*#__PURE__*/ jsx_runtime_.jsx(hi_.HiOutlineX, {
                            size: 30,
                            style: {
                                color: "black"
                            }
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(hi_.HiMenu, {
                            size: 30,
                            style: {
                                color: "black"
                            }
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `md:flex ${navbarOpen ? "block" : "hidden"} md:items-center md:ml-4 mt-4 md:mt-0`,
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "md:h-auto md:flex md:ml-4 space-x-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                path: "/book",
                                text: t("header.Books"),
                                closeNavbar: closeNavbar
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                path: "/biography",
                                text: t("header.Biography"),
                                closeNavbar: closeNavbar
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                path: "/events",
                                text: t("header.Events"),
                                closeNavbar: closeNavbar
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(NavItem, {
                                path: "/contact",
                                text: t("header.Contact"),
                                closeNavbar: closeNavbar
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "text-lg md:text-base hover:font-bold",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(LocaleSwitcher, {})
                            })
                        ]
                    })
                })
            ]
        })
    });
};
function NavItem({ path , text , closeNavbar  }) {
    const router = (0,router_.useRouter)();
    const isCurrentPage = router.pathname === path;
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: `text-lg md:text-base hover:font-bold ${isCurrentPage ? "font-bold" : ""}`,
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: path,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                onClick: closeNavbar,
                className: `text-black ${isCurrentPage ? "font-bold" : ""}`,
                children: text
            })
        })
    });
}


/***/ })

};
;