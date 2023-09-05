import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Menu from "./menu";

export default function Navigation() {
  const [navbar, setNavbar] = useState(false)
  const router = useRouter();

  const { t } = useTranslation("");

  useEffect(() => {
    let dir = "ltr";
    let lang = router.locale == "uk" ? "uk" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <nav className="w-full bg-gray-300">
      <div className="sm:px-16 px-6 py-3">
        <div className="flex justify-end">
          <LocaleSwitcher />
        </div>
        <div className="flex justify-start h-max">

          <div className="flex h-16">
            <div className="flex justify-between md:flex md:justify-around md:align-middle">
              <div className="items-center justify-center">
                <Link href="/" className="flex justify-center items-center">
                  <img src="/dotaij-logo.png" alt="logo" width={200} height={20} className="object-contain" />
                </Link>
              </div>

              <div className="md:hidden pt-4 justify-center items-center">
                <button className="rounded-md" onClick={() => setNavbar(!navbar)}>
                  {navbar ? (
                    <img src="/close.svg" width={30} height={30} alt="close icon" />
                  ) : (
                    <img src="/menu.svg" width={30} height={30} alt="menu icon" />
                  )}
                </button>
              </div>
            </div>

            <div className="md:show">
              <Menu navbar={navbar} setNavbar={setNavbar} />
            </div>
            {/* <div className={`md:block ${navbar ? 'block' : 'hidden'} md:right-0`}>
              <ul className="md:h-auto md:flex cursor-pointer">
                <Link href="/book" onClick={() => setNavbar(!navbar)}>
                  <li className="text-xl px-6 text-center py-5 md:hover:bg-transparent hover:font-bold">
                    {t('header.Books')}
                  </li>
                </Link>
                <Link href="/biography" onClick={() => setNavbar(!navbar)}>
                  <li className="text-xl px-6 text-center py-5 md:hover:bg-transparent hover:font-bold">
                    {t('header.Biography')}
                  </li>
                </Link>
                <Link href="/events" onClick={() => setNavbar(!navbar)}>
                  <li className="text-xl px-6 text-center py-5 md:hover:bg-transparent hover:font-bold">
                    {t('header.Events')}
                  </li>
                </Link>
                <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                  <li className="text-xl px-6 text-center py-5 md:hover:bg-transparent hover:font-bold">
                    {t('header.Contact')}
                  </li>
                </Link>
              </ul>
            </div> */}
          </div>

        </div>
        <div className="md:hidden">
          <Menu navbar={navbar} setNavbar={setNavbar} />
        </div>
      </div>
    </nav>
  );
}
