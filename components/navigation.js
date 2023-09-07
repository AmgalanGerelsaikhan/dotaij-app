// pages/components/Navigation.js

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher"; // Assuming you have a LocaleSwitcher component

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
    <nav className="bg-white py-3 relative">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <a onClick={closeNavbar} className="text-3xl font-bold text-black relative z-10">
            <span className="logo-text text-prata text-xl" style={{ fontFamily: 'Prata', fontSize: '30px' }}>
              DOTAIJ
            </span>
          </a>
        </Link>

        <div className="md:hidden">
          <button onClick={toggleNavbar} className={`text-black ${navbarOpen ? 'bg-black' : 'bg-black'} p-2`}>
            {navbarOpen ? (
              <img src="/close.svg" width={30} height={30} alt="close icon" />
            ) : (
              <img src="/whitemenu.svg" width={30} height={30} alt="menu icon" />
            )}
          </button>
        </div>

        <div className={`md:flex ${navbarOpen ? 'block' : 'hidden'} md:items-center md:ml-4 mt-4 md:mt-0`}>
          <ul className="md:h-auto md:flex md:ml-4 space-x-4">
            <NavItem path="/book" text={t('header.Books')} closeNavbar={closeNavbar} />
            <NavItem path="/biography" text={t('header.Biography')} closeNavbar={closeNavbar} />
            <NavItem path="/events" text={t('header.Events')} closeNavbar={closeNavbar} />
            <NavItem path="/contact" text={t('header.Contact')} closeNavbar={closeNavbar} />
            <li className="text-lg md:text-base hover:font-bold">
              <LocaleSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ path, text, closeNavbar }) {
  const router = useRouter();
  const isCurrentPage = router.pathname === path;

  return (
    <li className={`text-lg md:text-base hover:font-bold ${isCurrentPage ? 'font-bold' : ''}`}>
      <Link href={path} passHref>
        <a onClick={closeNavbar} className={`text-black ${isCurrentPage ? 'font-bold' : ''}`}>
          {text}
        </a>
      </Link>
    </li>
  );
}
