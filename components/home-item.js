import { useTranslation } from "next-i18next";
import { useState } from "react";
import Modal from "./modal";

export default function HomeItem({ book }) {
  const { t, i18n } = useTranslation("");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-[#ffffff] text-center relative">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/5 gap-5 relative">
          <div
            className={`w-full h-[400px] bg-cover bg-top z-10`}
            style={{
              backgroundImage: `url(${book.id === 1 ? '/heron_book.png' : '/mongoliv_book.png'})`,
              backgroundPosition: 'center top',
            }}
          >
          </div>

        </div>

        <div className="w-full md:w-3/5 my-10 mx-20 text-left">
          <p className="text-2xl font-bold">
            {i18n.language === 'uk' ? book.nameUk : book.name}
          </p>
          <p className="text-[#14213d] text-sm pb-3 mb-5">
            {t('home.released')}: {book.published}
          </p>
          <p className="mb-6 text-[#14213d]">
            {i18n.language === 'uk' ? (
              book.descUk.length > 700 ?
                `${book.descUk.substring(0, 700)}...` : book.descUk
            ) : (
              book.desc.length > 700 ?
                `${book.desc.substring(0, 700)}...` : book.desc
            )}
          </p>

          <div className="mt-31">
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
