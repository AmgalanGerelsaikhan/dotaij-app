import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export default function Menu({ navbar, setNavbar }) {
  // const [navbar, setNavbar] = useState(false)

  const { t } = useTranslation("");

  return (
    <div className={`md:block ${navbar ? 'block' : 'hidden'} md:right-0`}>
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
    </div>

  );
}
