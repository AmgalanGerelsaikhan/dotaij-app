import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useState } from "react";
// import Modal from "react-modal";
import { HiOutlineX } from "react-icons/hi";
import Modal from "./modal";

export default function BookItem({ book }) {
    const { t } = useTranslation("");
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className="w-full h-full sm:h-[630px] bg-black">
                <div className="flex flex:col md:flex-row gap-5 h-full">
                    <div className="w-full md:w-2/5 items-center justify-center relative">
                        {book.id === 1 ? (
                            <div className="w-full h-full bg-cover bg-[url('/heros-way.jpg')] bg-center blur-sm">
                            </div>
                        ) : (
                            <div className="w-full h-full bg-cover bg-[url('/mongoliv1.jpeg')] bg-center blur-sm">
                            </div>
                        )}
                    </div>
                    <img onClick={() => setIsOpen(true)} className="invisible md:visible object-contain absolute w-40 h-96 ml-20 mt-20 hover:w-44 hover:h-96" src={book.img} alt="logo" />

                    <div className="w-full md:w-3/5 my-10 mx-2 sm:mx-20">
                        <p className=" text-2xl">{book.name}</p>
                        <p className="text-gray-600 text-sm">
                            Release Date: {book.published}
                        </p>
                        <p className="mb-6">
                            {book.desc.length > 500 ?
                                `${book.desc.substring(0, 500)}...` : book.desc
                            }
                        </p>
                        <a
                            href={`/book?bookId=${book.id}`}
                            type="button"
                            className="rounded-3xl text-white
                      bg-gradient-to-r from-[#8DD816] to-[#0FC5EF]
                      px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal">
                            {t('book.more')}
                        </a>
                    </div>
                </div>
            </div>

            <div id="modal-root">
                {isOpen &&
                    <Modal onClose={() => setIsOpen(false)} bgImage={book.img}>
                        Hello from the modal!
                    </Modal>
                }
            </div>
        </>

        // <div className="text-left sm:flex mb-8">
        //     <div className="mr-8 sm:w-1/4">
        //         <img src={book.img} width="100%" height="100%" alt="logo" />
        //     </div>
        //     <div className="w-3/4 sm:flex flex-col sm:flex-wrap justify-between">
        //         <div className="relative">
        //             <div className=" items-center sm:flex flex-row mb-5">
        //                 <h2>
        //                     <a className="md:mt-5 uppercase text-cyan-800 text-2xl" href={`/book/${book.id}`} alt={book.name}>{book.name}</a>
        //                     <p>{book.published}</p>
        //                 </h2>
        //                 <a
        //                     href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
        //                     type="button"
        //                     target="_blank"
        //                     className="rounded-3xl bg-blue-500 ml-5 text-white
        //                         border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
        //                     data-te-ripple-init
        //                     data-te-ripple-color="light">
        //                     {t('book.buy')}
        //                 </a>
        //                 {/* <a
        //                     href="/book"
        //                     type="button"
        //                     className="rounded-3xl bg-blue-500 ml-5 text-white
        //                         border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
        //                     data-te-ripple-init
        //                     data-te-ripple-color="light">
        //                     {t('book.more')}
        //                 </a> */}
        //             </div>
        //             <div>
        //                 <p>{book.desc}</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}
