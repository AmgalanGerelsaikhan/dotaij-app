import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation("");

  return (
    <footer className="text-[#14213d] py-6 px-10 sm:px-0 pt-20">
      <div className="container flex flex-col text-sm">
        {/* Centered Social Media Icons */}
        <div className="flex gap-4 mb-6">
          {/* Add your social media icons and links here */}
          <a href="https://www.facebook.com/Kozak.Tsogo" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} style={{ color: "#14213d" }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} style={{ color: "#14213d" }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} style={{ color: "#14213d" }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={20} style={{ color: "#14213d" }} />
          </a>
        </div>

        {/* Menu Navigation */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="flex">
            <Link href="/books">Books</Link>
          </div>
          <div>
            <Link href="/biography">Biography</Link>
          </div>
          <div>
            <Link href="/news">News</Link>
          </div>
          <div>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        {/* Copyright Message */}
        <div className="mt-4">
          {t('footer.copyright')} © 2000 - 2024 Do Taij Mogul
        </div>
      </div>
    </footer>
  );
}
