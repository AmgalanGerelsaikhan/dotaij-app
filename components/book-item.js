import { useTranslation } from "next-i18next";

export default function BookItem({ book }) {
    const { t } = useTranslation("");

    return (
        <div className="sm:flex">
            <div className="mr-0 sm:mr-8 sm:w-1/4 w-full">
                <img src={book.img} alt="logo" className="w-60 m-auto" />
            </div>
            <div className="sm:w-3/4 sm:flex flex-col sm:flex-wrap m-5 sm:m-0">
                <div className="relative">
                    <div className="flex flex-col sm:flex-row gap-4 mb-5">
                        <div className="mb-5 m-auto sm:m-0">
                            <a className="md:mt-5 uppercase text-2xl" href={`/book?bookId=${book.id}`} alt={book.name}>{book.name}</a>
                            <p>{t('book.published')}: {book.published}</p>
                        </div>
                        <div className="m-auto">
                            <a
                                href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                                type="button"
                                target="_blank"
                                className="rounded-3xl text-white
                                bg-gradient-to-r from-[#8DD816] to-[#0FC5EF]
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
                                className="rounded-3xl text-white
                                bg-gradient-to-r from-[#8DD816] to-[#0FC5EF]
                                px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                {t('book.more')}
                            </a>
                        </div>
                    </div>
                    <div className="text-justify text-gray-400">
                        <p>
                            {book.desc.length > 500 ?
                                `${book.desc.substring(0, 500)}...` : book.desc
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
