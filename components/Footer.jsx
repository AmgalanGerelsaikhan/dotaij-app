import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full h-32 bg-gray-100 px-8 py-8">
            <div className="flex flex-row align-middle">
                <div className="flex-1"><h5>© 2023 он. Бүх эрх хуулиар хамгаалагдсан</h5></div>
                <div className="grid grid-cols-3 space-x-3">
                    <a href="https://www.facebook.com" target="_blank">
                        <img src="/fb-logo.svg" width={50} height={50} alt="logo" />
                    </a>
                    {/* <a href="https://www.facebook.com/battuya.erdenebaatar" target="_blank">
                        <img src="/insta-logo.svg" width={50} height={50} alt="logo" />
                    </a>
                    <a href="https://www.facebook.com/battuya.erdenebaatar" target="_blank">
                        <img src="/fb-logo.svg" width={50} height={50} alt="logo" />
                    </a> */}
                </div>
            </div>
        </div>
    )
}