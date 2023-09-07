import Link from "next/link";
import { useTranslation } from "next-i18next";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation("");

  return (
    <footer className="bg-gray-300 py-6">
      <div className="container mx-auto flex flex-col items-center">
        {/* Menu Navigation */}
        <nav className="mb-4">
          <ul className="flex gap-4">
            <li>
              <Link href="/book">Books</Link>
            </li>
            <li>
              <Link href="/biography">Biography</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/contact">Events</Link>
            </li></ul>
        </nav>

        {/* Centered Social Media Icons */}
        <div className="flex gap-4">
          {/* Add your social media icons and links here */}
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={20} style={{ color: "black" }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={20} style={{ color: "black" }} />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={20} style={{ color: "black" }} />
          </a>
        </div>

        {/* Copyright Message */}
        <div className="text-center text-gray-700 text-xs mt-4">
          {t('footer.copyright')} © 2000 - 2024 Do Taij Mogul
        </div>
      </div>
    </footer>
  );
}
