import Image from "next/image";
import Link from "next/link";

export default function SectionItem({ sectionId }) {

    return (
        <>

            <section id="books" className="h-[740px] mt-32">
                <div className="flex flex-row bg-cover bg-[url('/book-bg.png')]">
                    <div className="h-full w-full">
                        <img src="/heros-way.jpg" alt="book" />
                    </div>
                    <div className="leading-10 text-white text-2xl italic text-right whitespace-normal p-10">
                        <p className="float-right">
                            <img src="/underline_white.webp" alt="logo" />
                        </p><br />
                        <p className="pb-10">
                            The city is in a state of shock over the fate of two hometown heroes: Eagles starting quarterback Archie Hughes, and his even more famous wife, Grammy-winning singer Francine Hughes.
                        </p>
                        <p className="pb-10">
                            One spouse is murdered. The other is suspect #1.
                        </p>
                        <p className="pb-10">
                            Even before the case hits the courtroom, it’s the hottest ticket in town.
                        </p>
                        <p className="pb-10">
                            For the defense: Cooper Lamb, private investigator to the stars.
                        </p>
                        <p className="pb-10">
                            For the prosecution: Veena Lion, a sleuth so bright she’s got to wear shades.
                        </p>
                        <div>
                            <Link
                                href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                                type="button"
                                target="_blank"
                                className="rounded-3xl bg-blue-500
                                border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                Buy now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section id="biography" className="h-[481px] flex flex-row">
                <div className="bg-black h-[481px] w-2/3">
                    {/* h-[481px] w-[880px]  */}
                    <iframe title="HERON&#39;S WAY ON SALE NOW" width="100%" height="481" src="https://www.youtube.com/embed/qlS97wcqSTw"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        id="widget2" data-gtm-yt-inspected-9="true">
                    </iframe>
                </div>
                <div className="bg-cover bg-[url('/bg2.webp')] w-1/3 content-center text-white">
                    <p className="my-5 text-2xl">
                        Heron's way
                    </p>
                    <div className="mx-10 mb-5">
                        <img src="/heros-way.jpg" width={200} height={400} alt="book" />
                    </div>
                    <Link
                        href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                        type="button"
                        target="_blank"
                        className="rounded-3xl bg-blue-500
                                border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Buy now
                    </Link>
                </div>
            </section>

            <section id="events" className="h-[450px]">
                <div className="text-white text-2xl h-full flex flex-row">
                    <div className="w-1/3 h-full bg-gradient-to-r from-[#f4bb3a] to-[#f3b11c]">
                        <div className="m-10">
                            <p className="text-2xl text-center">
                                James Patterson writes his thrillers as if he were building roller coasters.”
                            </p>
                        </div>
                    </div>
                    <div className="w-2/3 h-full bg-cover bg-[url('/book-bg.png')]">
                        <div className="m-10">
                            <div className="flex flex-row h-full">
                                <div className="mr-10">
                                    <div className="items-center" >
                                        <img src="/heros-way.jpg" width="100%" height="100%" alt="logo" />
                                        <div className="mt-10 mb-3 text-center">
                                            <Link
                                                href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                                                type="button"
                                                target="_blank"
                                                className="rounded-3xl bg-blue-500
                                border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">
                                                Buy now
                                            </Link>
                                        </div>
                                        <p className="text-base text-center">26 / 08 / 2023</p>
                                    </div>
                                </div>

                                <div className="mr-10">
                                    <div className="items-center" >
                                        <img src="/heros-way.jpg" width="100%" height="100%" alt="logo" />
                                        <div className="mt-10 mb-3 text-center">
                                            <Link
                                                href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                                                type="button"
                                                target="_blank"
                                                className="rounded-3xl bg-blue-500
                                border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">
                                                Buy now
                                            </Link>
                                        </div>
                                        <p className="text-base text-center">26 / 08 / 2023</p>
                                    </div>
                                </div>

                                <div className="mr-10">
                                    <div className="items-center" >
                                        <img src="/heros-way.jpg" width="100%" height="100%" alt="logo" />
                                        <div className="mt-10 mb-3 text-center">
                                            <Link
                                                href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                                                type="button"
                                                target="_blank"
                                                className="rounded-3xl bg-blue-500
                                border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">
                                                Buy now
                                            </Link>
                                        </div>
                                        <p className="text-base text-center">26 / 08 / 2023</p>
                                    </div>
                                </div>

                                <div className="mr-10">
                                    <div className="items-center" >
                                        <img src="/heros-way.jpg" width="100%" height="100%" alt="logo" />
                                        <div className="mt-10 mb-3 text-center">
                                            <Link
                                                href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                                                type="button"
                                                target="_blank"
                                                className="rounded-3xl bg-blue-500
                                border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">
                                                Buy now
                                            </Link>
                                        </div>
                                        <p className="text-base text-center">26 / 08 / 2023</p>
                                    </div>
                                </div>
                                <div className="mr-10">
                                    <div className="items-center" >
                                        <img src="/heros-way.jpg" width="100%" height="100%" alt="logo" />
                                        <div className="mt-10 mb-3 text-center">
                                            <Link
                                                href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                                                type="button"
                                                target="_blank"
                                                className="rounded-3xl bg-blue-500
                                border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                                                data-te-ripple-init
                                                data-te-ripple-color="light">
                                                Buy now
                                            </Link>
                                        </div>
                                        <p className="text-base text-center">26 / 08 / 2023</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}