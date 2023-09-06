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
    <nav>
      <div className="w-full bg-gray-300 px-5 py-2">
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
                  ) : (
                    <Image src="/menu.svg" width={30} height={30} alt="menu icon button" />
                  )}
                </button>
              </div>

            </div>

          </div>
        </div >
      </div >
    </nav>
  );
}
