import { useTranslation } from "next-i18next"
import { SLIDE_DATA } from "../constants/constants"

export default function MySlide({ data }) {
    const { t } = useTranslation()

    const item = SLIDE_DATA.filter(f => f.id === data)[0]

    return (
        <div className="text-white text-xl w-full h-full">
            {item ? (
                data === 1 ? (
                    <div className="w-full h-full">
                        <a target="_blank" href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D">
                            <img className="object-contain w-full" src="/swiper_pic1.png" />
                        </a>
                    </div>
                ) : (
                    <div className="w-full h-full">
                        <a target="_blank" href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D">
                            <img className="object-contain w-full" src="/swiper_pic2.png" />
                        </a>
                    </div>
                )
            ) : (
                <div>Not found</div>
            )}
        </div>
    )
}
