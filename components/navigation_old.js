import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher"; // Assuming you have a LocaleSwitcher component
import { HiMenu, HiOutlineX } from "react-icons/hi"; // Import the HiMenu and HiOutlineX icons

export default function Navigation() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    let dir = "ltr";
    let lang = router.locale === "uk" ? "uk" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  return (
    <nav>
      <div className="w-full bg-[#2d323d] text-[#98a2aa] px-5 py-2">
        <div className="flex justify-between items-center px-5 md:px-10">
          <LocaleSwitcher />
          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden py-3 rounded-md"
            onClick={toggleNavbar}
          >
            {navbarOpen ? (
              <img
                src="/close.svg"
                width={30}
                height={30}
                alt="close icon button"
              />
            ) : (
              <img
                src="/menu.svg"
                width={30}
                height={30}
                alt="menu icon button"
              />
            )}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`md:hidden ${navbarOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col items-center">
            <Link href="/book" onClick={closeNavbar}>
              <p className="text-xl py-5 hover:font-bold">
                {t('header.Books')}
              </p>
            </Link>
            <Link href="/biography" onClick={closeNavbar}>
              <p className="text-xl py-5 hover:font-bold">
                {t('header.Biography')}
              </p>
            </Link>
            <Link href="/events" onClick={closeNavbar}>
              <p className="text-xl py-5 hover:font-bold">
                {t('header.Events')}
              </p>
            </Link>
            <Link href="/contact" onClick={closeNavbar}>
              <p className="text-xl py-5 hover:font-bold">
                {t('header.Contact')}
              </p>
            </Link>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:block">
          <div className="px-5">
            <div className="flex justify-between md:py-1 ">
              {/* LOGO */}
              <div className="">
                <Link href="/" className="">
                  <img
                    src="/dotaij-logo.png"
                    alt="logo"
                    width={180}
                    height={20}
                    className="object-contain"
                  />
                </Link>
              </div>

              <div className="md:flex cursor-pointer md:mt-1 mt-8">
                <NavItem path="/book" text={t('header.Books')} closeNavbar={closeNavbar} />
                <NavItem path="/biography" text={t('header.Biography')} closeNavbar={closeNavbar} />
                <NavItem path="/events" text={t('header.Events')} closeNavbar={closeNavbar} />
                <NavItem path="/contact" text={t('header.Contact')} closeNavbar={closeNavbar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ path, text, closeNavbar }) {
  const router = useRouter();
  const isCurrentPage = router.pathname === path;

  return (
    <Link href={path} passHref>
      <a onClick={closeNavbar} className={`text-xl px-6 text-center py-5 md:py-2 hover:font-bold ${isCurrentPage ? 'font-bold' : ''}`}>
        {text}
      </a>
    </Link>
  );
}
