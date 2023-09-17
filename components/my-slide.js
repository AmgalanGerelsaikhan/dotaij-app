import { useTranslation } from "next-i18next"
import { SLIDE_DATA } from "../constants/constants"

export default function MySlide({ data }) {
    const { t } = useTranslation()

    const item = SLIDE_DATA.filter(f => f.id === data)[0]

    return (
        <div className="text-white text-xl w-full h-screen md:h-[500px]">
            {item ? (
                data === 1 ? (
                    <div className="bg-cover bg-center w-full h-full bg-[url('/swiper_pic1.png')]" href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D">
                        </div>
                ) : (
                    <div className="bg-cover bg-center w-full h-full bg-[url('/swiper_pic2.png')]">
                    </div>
                )
            ) : (
                <div>Not found</div>
            )}
        </div>
    )
}
