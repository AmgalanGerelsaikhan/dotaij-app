import { useTranslation } from "next-i18next";
import Modal from "./modal";
import { useState } from "react";

export default function BookItem({ book }) {
    const { t, i18n } = useTranslation("");
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="sm:flex">
                <div className="mr-0 sm:mr-8 sm:w-1/4 w-full">
                    <img src={book.img} alt="logo" className="w-60 m-auto" onClick={() => setIsOpen(true)} />
                </div>
                <div className="sm:w-3/4 sm:flex flex-col sm:flex-wrap m-5 sm:m-0">
                    <div cl
                    assName="relative">
                        <div className="flex flex-col sm:flex-row gap-4 mb-5">
                            <div className="mb-5 m-auto sm:m-0">
                                <a className="md:mt-5 text-2xl font-bold" href={`/book?bookId=${book.id}`} alt={book.name}>{i18n.language === 'uk' ? book.nameUk : book.name}</a>
                                <p>{t('book.published')}: {book.published}</p>
                            </div>
                            <div className="m-auto">
                                <a
                                    href="https://www.amazon.com/Herons-Way-Adventures-Became-Chinggis-ebook/dp/B0CQGCZ856/ref=sr_1_2?crid=FIQ5B9PIQX3O&keywords=Heron%27s+Way&qid=1703245434&refinements=p_n_feature_nine_browse-bin%3A3291437011&rnid=3291435011&s=books&sprefix=heron%27s+way%2Caps%2C258&sr=1-2"
                                    type="button"
                                    target="_blank"
                                    className="rounded-2xl text-white
                                bg-gradient-to-r from-[#fb8500] to-[#ffb703]
                                px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    {t('book.buy')}
                                </a>
                            </div>
                            <div className="m-auto">
                                <a
                                    href={`/book?bookId=${book.id}`}
                                    type="button"
                                    className="rounded-2xl text-white
                                bg-gradient-to-r from-[#fb8500] to-[#ffb703]
                                px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                                    data-te-ripple-init
                                    data-te-ripple-color="light">
                                    {t('book.more')}
                                </a>
                            </div>
                        </div>
                        <div className="text-justify text-[#14213d]">
                            <p>
                                {i18n.language === 'uk' ? (
                                    book.descUk.length > 1100 ?
                                        `${book.descUk.substring(0, 1100)}...` : book.descUk
                                ) : (
                                    book.desc.length > 1100 ?
                                        `${book.desc.substring(0, 1100)}...` : book.desc
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Modal onClose={() => setIsOpen(false)} bgImage={book.img}></Modal>
            )}
        </>
    );
}
