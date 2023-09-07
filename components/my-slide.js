import { useTranslation } from "next-i18next"
import { SLIDE_DATA } from "../constants/constants"

export default function MySlide({ data }) {
    const { t } = useTranslation()

    const item = SLIDE_DATA.filter(f => f.id === data)[0]

    return (
        <div className="text-white text-xl w-full h-screen md:h-[600px]">
            {item ? (
                <div className={`bg-cover bg-center w-full h-full bg-[url('/swipe-bg5.jpg')]`}>
                    <div className=" h-full mx-10 md:mx-52 justify-center grid md:grid-cols-2 leading-8 md:gap-20 gap-0">
                        <div className="flex justify-center flex-col md:my-0 my-4">
                            <div className="">
                                <h1 className=" text-5xl mb-5 ">{item.titleEn}</h1>
                                <p>{item.descEn}</p>
                                <a
                                    href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                                    type="button"
                                    target="_blank"
                                    className="mt-5 rounded-3xl 
                                    bg-gradient-to-r from-[#8DD816] to-[#0FC5EF]
                                    px-7 pb-3 pt-[10px] 
                                    text-sm font-medium uppercase leading-normal italic"
                                >
                                    {t('index.buy')}
                                </a>
                            </div>
                        </div>
                        <div className="flex place-content-center content-center mb-10 md:w-full w-full  md:m-0 justify-center items-center"><img src={item.bookImage} width={300} /></div>

                    </div>
                </div>
            ) : (
                <div>Not found</div>
            )}
        </div>
    )
}