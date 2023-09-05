import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function BookItem({ book }) {
    const { t } = useTranslation("");

    return (
        <div className="text-left sm:flex mb-8">
            <div className="mr-8 sm:w-1/4">
                <img src={book.img} width="100%" height="100%" alt="logo" />
            </div>
            <div className="w-3/4 sm:flex flex-col sm:flex-wrap justify-between">
                <div className="relative">
                    <div className=" items-center sm:flex flex-row mb-5">
                        <h2>
                            <a className="md:mt-5 uppercase text-cyan-800 text-2xl" href={`/book/${book.id}`} alt={book.name}>{book.name}</a>
                            <p>{book.published}</p>
                        </h2>
                        <a
                            href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                            type="button"
                            target="_blank"
                            className="rounded-3xl bg-blue-500 ml-5 text-white
                                border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            {t('book.buy')}
                        </a>
                        <a
                            href="/book"
                            type="button"
                            className="rounded-3xl bg-blue-500 ml-5 text-white
                                border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            {t('book.more')}
                        </a>
                    </div>
                    <div>
                        <p>{book.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
