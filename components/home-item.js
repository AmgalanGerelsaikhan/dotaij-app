import { useTranslation } from "next-i18next";
import { useState } from "react";
import Modal from "./modal";

export default function HomeItem({ book }) {
    const { t } = useTranslation("");
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="w-full h-full md:h-[600px] bg-black text-center items-center justify-center">
                <div className="flex flex:col md:flex-row gap-5 h-full text-center">
                    <div className="w-full md:w-2/5 items-center justify-center relative">
                        {book.id === 1 ? (
                            <div className="w-full h-full bg-cover bg-[url('/heros-way.jpg')] bg-center blur-sm">
                            </div>
                        ) : (
                            <div className="w-full h-full bg-cover bg-[url('/mongoliv1.jpeg')] bg-center blur-sm">
                            </div>
                        )}
                    </div>
                    <img className="m-auto text-center ml-2 md:ml-2 lg:ml-12 xl:ml-20 2xl:ml-28 object-contain absolute w-60 h-96 mt-20 hover:w-64 hover:h-96"
                        onClick={() => setIsOpen(true)} src={book.img} alt="logo" />

                    <div className="w-full md:w-3/5 my-10 mx-20 text-left">
                        <p className="text-2xl">{book.name}</p>
                        <p className="text-gray-600 text-sm pb-2">
                            Release Date: {book.published}
                        </p>
                        <p className="mb-6 text-gray-400">
                            {book.desc.length > 500 ?
                                `${book.desc.substring(0, 600)}...` : book.desc
                            }
                        </p>

                        <div className="mt-32">
                            <div>
                                <a
                                    href="https://www.youtube.com/watch?v=qlS97wcqSTw"
                                    target="_blank"
                                    className="uppercase mb-6">
                                    {t('book.trailer')}
                                </a>
                            </div>
                            <br />
                            <div>
                                <a
                                    href={`/book?bookId=${book.id}`}
                                    type="button"
                                    className="uppercase leading-normal">
                                    {t('book.more')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="modal-root">
                {isOpen &&
                    <Modal onClose={() => setIsOpen(false)} bgImage={book.img}>
                    </Modal>
                }
            </div>
        </>
    );
}
