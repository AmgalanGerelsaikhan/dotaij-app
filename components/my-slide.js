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
                        <a target="_blank" href="/biography">
                            <img className="object-contain w-full" src="/swp_author.jpg" />
                        </a>
                    </div>
                ) : data === 2 ? (
                    <div className="w-full h-full">
                        <a target="_blank" href="/book?bookId=1">
                            <img className="object-contain w-full" src="/swp_heron.jpg" />
                        </a>
                    </div>
                )  : (
                    <div className="w-full h-full">
                        <a target="_blank" href="/book?bookId=2">
                            <img className="object-contain w-full" src="/swp_mongoliv.jpg" />
                        </a>
                    </div>
                )
            ) : (
                <div>Not found</div>
            )}
        </div>
    )
}
