import { useTranslation } from "next-i18next";
import { useState } from "react";
import Modal from "./modal";

export default function HomeItem({ book }) {
  const { t, i18n } = useTranslation("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-black text-center relative">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-2/5 gap-5 relative">
          <div
            className={`w-full h-[600px] bg-cover bg-top z-10`}
            style={{
              backgroundImage: `url(${book.id === 1 ? '/heron_blur.jpg' : '/msh_blur.jpg'})`,
              backgroundPosition: 'center top',
            }}
          >
            <img
              className="w-1/2 md:w-48 h-1/2 md:h-100 md:h-700 mt-1 md:mt-6 hover:w-64 hover:h-96 cursor-pointer absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
              onClick={() => setIsOpen(true)}
              src={book.img}
              alt="logo"
            />
          </div>

        </div>

        <div className="w-full md:w-3/5 my-10 mx-20 text-left">
          <p className="text-2xl">
            {i18n.language === 'uk' ? book.nameUk : book.name}
          </p>
          <p className="text-gray-600 text-sm pb-3 mb-5">
            {t('home.released')}: {book.published}
          </p>
          <p className="mb-6 text-gray-400">
            {i18n.language === 'uk' ? (
              book.descUk.length > 950 ?
                `${book.descUk.substring(0, 950)}...` : book.descUk
            ) : (
              book.desc.length > 950 ?
                `${book.desc.substring(0, 950)}...` : book.desc
            )}
          </p>

          <div className="mt-31">
            <div>
              <a
                href="https://www.youtube.com/watch?v=qlS97wcqSTw"
                target="_blank"
                className="uppercase mb-4 text-xs">
                {t('book.trailer')}
              </a>
            </div>
            <br />
            <div>
              <a
                href={`/book?bookId=${book.id}`}
                type="button"
                className="uppercase leading-normal text-xs">
                {t('book.more')}
              </a>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal onClose={() => setIsOpen(false)} bgImage={book.img}></Modal>
      )}
    </div>
  );
}
