import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Menu from "./menu";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navigation() {
  const [navbar, setNavbar] = useState(false);
  const router = useRouter();

  const { t } = useTranslation("");

  useEffect(() => {
    let dir = "ltr";
    let lang = router.locale == "uk" ? "uk" : "en";
    document.querySelector("html").setAttribute("dir", dir);
    document.querySelector("html").setAttribute("lang", lang);
  }, [router.locale]);

  return (
    <nav className="sticky w-full bg-[#140D0F] bg-[url('/bg-nav.png')]">
      <div className=" sticky text-[#98a2aa] py-2 flex">
        <div className="flex-1 justify-start">
          <div className="px-0">
            <div className="flex justify-between md:py-1">
              {/* LOGO */}
              <div className="flex items-center">
                <Link href="/" className="">
                  <div className="group relative">
                    <img
                      src="/LOGO.png"
                      alt="logo"
                      width={130}
                      height={10}
                      className="object-contain transition-transform transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity"></div>
                  </div>
                </Link>
              </div>

              <div className={`md:block ${navbar ? "block" : "hidden"}`}>
                {/* Center-align menu items */}
                <div className="md:h-auto md:flex justify-center cursor-pointer md:mt-1 mt-4">
                  <Link href="/books" onClick={() => setNavbar(!navbar)}>
                    <p className="text-lg px-4 py-3 md:py-2 md:hover:bg-transparent hover:font-bold">
                      {t("header.Books")}
                    </p>
                  </Link>
                  <Link href="/biography" onClick={() => setNavbar(!navbar)}>
                    <p className="text-lg px-4 py-3 md:py-2 md:hover:bg-transparent hover:font-bold">
                      {t("header.Biography")}
                    </p>
                  </Link>
                  <Link href="/events" onClick={() => setNavbar(!navbar)}>
                    <p className="text-lg px-4 py-3 md:py-2 md:hover:bg-transparent hover:font-bold">
                      {t("header.Events")}
                    </p>
                  </Link>
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    <p className="text-lg px-4 py-3 md:py-2 md:hover:bg-transparent hover:font-bold">
                      {t("header.Contact")}
                    </p>
                  </Link>
                </div>
              </div>

              {/* MOBILE */}
              <div className="md:hidden py-0">
                <button
                  className="pt-4 rounded-md"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <HiOutlineX size={30} />
                  ) : (
                    <HiOutlineMenu size={30} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-none">
          <div className="justify-end mt-4 ml-2"> {/* Reduced margin-top */}
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
