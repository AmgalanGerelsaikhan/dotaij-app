import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";

const bookInfo =
{
    id: 1,
    name: 'Heros way',
    img: '/heros-way.jpg',
    published: '2023 / 08 / 27',
    desc: 'Veena Lion and Cooper Lamb are rival PIs in Philadelphia in this “fun ride…the romance between Cooper and Veena is artfully handled...endearing characters including Cooper’s two preternaturally clever kids and his Rhodesian ridgeback puppy.” –Publishers Weekly The city is in a state of shock over the fate of two hometown heroes: Eagles Veena Lion and Cooper Lamb are rival PIs in Philadelphia in this “fun ride…the romance between Cooper and Veena is artfully handled...endearing characters including Cooper’s two preternaturally clever kids and his Rhodesian ridgeback puppy.” –Publishers Weekly The city is in a state of shock over the fate of two hometown heroes: Eagles Veena Lion and Cooper Lamb are rival PIs in Philadelphia in this “fun ride…the romance between Cooper and Veena is artfully handled...endearing characters including Cooper’s two preternaturally clever kids and his Rhodesian ridgeback puppy.” –Publishers Weekly The city is in a state of shock over the fate of two hometown heroes: Eagles'
};

export default function Book() {
    return (
        <div>
            <NavBar />
            <div className="mt-32 mx-10 text-left flex mb-8">
                <div className="mr-8 w-1/4">
                    <img src={bookInfo.img} width="100%" height="100%" alt="logo" />
                </div>
                <div className="w-3/4 flex flex-col sm:flex-wrap justify-between">
                    <div className="relative">
                        <div className=" items-center flex flex-row mb-5">
                            <h2>
                                <a className="uppercase text-cyan-800 text-2xl" href="/book" alt={bookInfo.name}>{bookInfo.name}</a>
                                <p>{bookInfo.published}</p>
                            </h2>
                        </div>
                        <br />
                        <Link
                            href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                            type="button"
                            target="_blank"
                            className="rounded-3xl bg-blue-500 ml-5 text-white
                                border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal"
                            data-te-ripple-init
                            data-te-ripple-color="light">
                            Buy the book
                        </Link>
                    </div>
                </div>
            </div>
            <div className="mx-10">
                <h2 className="uppercase text-cyan-800 text-2xl">DESCRIPTION</h2>
                <p>{bookInfo.desc}</p>
            </div>
            <Footer />
        </div>
    )
}