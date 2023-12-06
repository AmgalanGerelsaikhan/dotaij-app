import LocaleSwitcher from "./locale-switcher";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
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

  const handleLocaleChange = (e) => {
    const selectedLocale = e.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLocale });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#fcfaf9]">
      <div className="text-[#14213d] py-0 flex mr-2 md:mr-3">
        <div className="flex-1 justify-start">
          <div className="px-10">
            <div className="flex justify-between md:py-1">
              {/* LOGO */}
              <div className="flex items-center">
                <Link href="/" className="">
                  <div className="group relative">
                    <img
                      src="/LOGO.png"
                      alt="logo"
                      width={210}
                      height={70}
                      className="object-contain transition-transform transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-opacity"></div>
                  </div>
                </Link>
              </div>

              <div className={`md:block ${navbar ? "block" : "hidden"}`}>
                {/* Center-align menu items */}
                <div className="md:h-auto md:flex justify-center cursor-pointer md:mt-1 mt-4">
                  <Link href="/books">
                    <a onClick={() => setNavbar(!navbar)}>
                      <p className="text-lg px-4 py-3 md:py-2 md:hover:bg-transparent hover:font-bold transition-all">
                        {t("header.Books")}
                      </p>
                    </a>
                  </Link>
                  <Link href="/biography">
                    <a onClick={() => setNavbar(!navbar)}>
                      <p className="text-lg px-4 py-3 md:py-2 md:hover:bg-transparent hover:font-bold transition-all">
                        {t("header.Biography")}
                      </p>
                    </a>
                  </Link>
                  <Link href="/news">
                    <a onClick={() => setNavbar(!navbar)}>
                      <p className="text-lg px-4 py-3 md:py-2 md:hover:bg-transparent hover:font-bold transition-all">
                        {t("header.News")}
                      </p>
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a onClick={() => setNavbar(!navbar)}>
                      <p className="text-lg px-4 py-3 md:py-2 md:hover:bg-transparent hover:font-bold transition-all">
                        {t("header.Contact")}
                      </p>
                    </a>
                  </Link>
                </div>
              </div>

              {/* MOBILE */}
              <div className="md:hidden py-2">
                <button
                  className="pt-1 rounded-md"
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

        <div className="md:flex-none md:ml-4">
          <select
            className="p-1 rounded-none bg-transparent text-sm"
            value={router.locale}
            onChange={handleLocaleChange}
          >
            <option value="uk">Ukraine</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
    </nav>
  );
}
