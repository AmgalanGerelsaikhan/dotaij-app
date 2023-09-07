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
<<<<<<< HEAD
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
          <button
            onClick={toggleNavbar}
            className={`text-white ${navbarOpen ? 'bg-white' : 'bg-white'} p-2`}
          >
            {navbarOpen ? (
              <HiOutlineX size={30} style={{ color: "black" }} />
            ) : (
              <HiMenu size={30} style={{ color: "black" }} />
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
=======
    <nav>
      <div className="w-full bg-[#2d323d] text-[#98a2aa] px-5 py-2">
        <div className="flex justify-end px-5 md:px-10">
          <LocaleSwitcher />
        </div>

        <div className="">

          <div className="px-5">
            <div className="flex justify-between md:py-1 ">

              {/* LOGO */}
              <div className="">
                <Link href="/" className="">
                  <img src="/dotaij-logo.png" alt="logo" width={180} height={20} className="object-contain" />
                </Link>
              </div>

              <div className={`md:block ${navbar ? 'block' : 'hidden'}`}>
                <div className="md:h-auto md:flex cursor-pointer md:mt-1 mt-8">
                  <Link href="/book" onClick={() => setNavbar(!navbar)}>
                    <p className="text-xl px-6 text-center py-5 md:py-2 md:hover:bg-transparent hover:font-bold">
                      {t('header.Books')}
                    </p>
                  </Link>
                  <Link href="/biography" onClick={() => setNavbar(!navbar)}>
                    <p className="text-xl px-6 text-center py-5 md:py-2 md:hover:bg-transparent hover:font-bold">
                      {t('header.Biography')}
                    </p>
                  </Link>
                  <Link href="/events" onClick={() => setNavbar(!navbar)}>
                    <p className="text-xl px-6 text-center py-5 md:py-2 md:hover:bg-transparent hover:font-bold">
                      {t('header.Events')}
                    </p>
                  </Link>
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    <p className="text-xl px-6 text-center py-5 md:py-2 md:hover:bg-transparent hover:font-bold">
                      {t('header.Contact')}
                    </p>
                  </Link>

                </div>
              </div>

              {/* MOBILE */}
              <div className="md:hidden py-0">
                <button className="py-3 rounded-md" onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <Image src="/close.svg" width={30} height={30} alt="close icon button" />
                    // <Image src="/close_gray.png" width={30} height={30} alt="close icon button" />
                  ) : (
                    <Image src="/menu.svg" width={30} height={30} alt="menu icon button" />
                    // <Image src="/menu_gray.png" width={30} height={30} alt="menu icon button" />
                  )}
                </button>
              </div>

            </div>

          </div>
        </div >
      </div >
>>>>>>> 9eae65f346f2d7423f3e92b6d5f4b7220fa63ae5
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
