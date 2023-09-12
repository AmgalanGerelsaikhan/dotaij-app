import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/my-navigation";
import Footer from "../components/footer";
import Link from "next/link";


import MySlide from "../components/my-slide";
import MySwiper from "../components/my-swiper1";
// import MySwiper from "../components/my-swiper";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* <Navigation /> */}
      <div className="">
        {/* swiper */}

        <session className="">
          <div className="bg-[#29292a] w-full">
            <MySwiper />
          </div>
        </session>

        {/* youtube */}
        <section className="w-auto flex sm:flex-row flex-col bg-cover my-16 text-white">
          <div className="flex sm:w-2/3">
            <iframe title="HERON&#39;S WAY ON SALE NOW" width="100%" height="481" src="https://www.youtube.com/embed/qlS97wcqSTw"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              id="widget2" allowFullScreen data-gtm-yt-inspected-9="true">
            </iframe>
          </div>
          <div className="sm:w-1/3 mt-10">
            <p className="flex text-4xl items-center justify-center">
              {t('index.book1-name')}
            </p>
            <div className="flex text-2xl items-center justify-center my-5 mx-10">
              {/* <img src="/heros-way.jpg" width={200} height={400} alt="book" /> */}
              <p>Starting from headers through the footers,
                every bit of your website has been
                engineered for your church’s complete control.</p>
            </div>
            {/* <div className="flex items-center justify-center my-7">
              <a
                href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                type="button"
                target="_blank"
                className="rounded-3xl bg-blue-500 border-2 border-blue-500 px-7 pb-3 pt-[10px] text-sm font-medium uppercase leading-normal italic"
              >
                {t('index.buy')}
              </a>
            </div> */}
          </div>
        </section>

        {/* writer info */}
        {/* <section className="bg-fixed bg-cover bg-center bg-[url('/profile.jpeg')]">
          <div className="p-10 h-[600px] text-white text-right">
            <div className="flex justify-center flex-col md:my-0 my-4">
              <div className=" text-2xl">
                <h1 className=" text-5xl mb-5 ">Writer name is here</h1>
                <p>Starting from headers through the footers,</p>
                <p>every bit of your website has been </p>
                <p>engineered for your church’s complete control.</p>
              </div>
            </div>
          </div>
        </section> */}

        {/* new releases large */}
        <section className="w-auto text-white h-full">
          <div className="flex flex-col gap-10 h-full">
            <p className="flex text-4xl">
              {t('index.new-releases')}
            </p>

            <div className="w-full h-full bg-black">
              <div className="flex flex:col md:flex-row gap-5 h-full">
                <div className="w-full md:w-2/5 items-center justify-center relative">
                  <div className="w-full h-full bg-cover bg-[url('/heros-way.jpg')] bg-center blur-sm">
                  </div>
                </div>
                <img className="object-contain absolute w-40 h-96 ml-20 mt-20 hover:w-44 hover:h-96" src="/heros-way.jpg" alt="logo" />
                {/* <div className="w-full absolute items-center justify-center text-center z-1 object-center"> */}
                {/* object-contain w-40 h-96 absolute items-center justify-center object-center hover:w-44 hover:h-96 */}
                {/* </div> */}
                <div className="w-full md:w-3/5 my-10 mx-20">
                  <p className=" text-2xl">Heron's way</p>
                  <p className="text-gray-600 text-sm">
                    Release Date: June 2nd, 2023
                  </p>
                  <p className=" mb-6">
                    “The Boogeyman,” a horror-thriller from the mind of best-selling author Stephen King, opens June 2, 2023, in theaters nationwide. High school student Sadie Harper and her younger sister Sawyer are reeling from the recent death of their mother and aren’t getting much support from their father, Will, a therapist who is dealing with his own pain. When a desperate patient unexpectedly shows up at their home seeking help, he leaves behind a terrifying supernatural entity that preys on families and feeds on the suffering of its victims. “The Boogeyman,” directed by Rob Savage (“Host”) with a screenplay by Scott Beck & Bryan Woods (“A Quiet Place”) and Mark Heyman (“Black Swan”) and a screen story by Scott Beck & Bryan Woods based upon the short story by Stephen King, stars Sophie Thatcher (“Yellowjackets”), Chris Messina (“Birds of Prey”), Vivien Lyra Blair (“Obi-Wan Kenobi”), Marin Ireland (“The Umbrella Academy”), Madison Hu (“Bizaardvark”), LisaGay Hamilton (“Vice”), and David Dastmalchian (“Dune”). The producers are Shawn Levy (“Stranger Things”), Dan Levine (“Arrival”), and Dan Cohen (“The Adam Project”), with John H. Starke (“Sicario”), Emily Morris (“Rosaline”), Scott Beck, Bryan Woods, Ryan Cunningham, Adam Kolbrenner (“The Tomorrow War”), and Robin Meisinger serving as executive producers.
                  </p>
                  <a
                    href="/book/1"
                    type="button"
                    className="rounded-3xl text-white
                      bg-gradient-to-r from-[#8DD816] to-[#0FC5EF]
                      px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal">
                    {t('book.more')}
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full h-full bg-black">
              <div className="flex flex:col md:flex-row gap-5 h-full">
                <div className="w-full md:w-2/5 items-center justify-center relative">
                  <div className="w-full h-full bg-cover bg-[url('/mongoliv1.jpeg')] bg-center blur-sm">
                  </div>
                </div>
                <img className="object-contain absolute w-40 h-96 ml-20 mt-20 hover:w-44 hover:h-96" src="/mongoliv1.jpeg" alt="logo" />
                <div className="w-full md:w-3/5 my-10 mx-20">
                  <p className=" text-2xl">Mongoliv</p>
                  <p className="text-gray-600 text-sm">
                    Release Date: June 2nd, 2023
                  </p>
                  <p className=" mb-6">
                    “The Boogeyman,” a horror-thriller from the mind of best-selling author Stephen King, opens June 2, 2023, in theaters nationwide. High school student Sadie Harper and her younger sister Sawyer are reeling from the recent death of their mother and aren’t getting much support from their father, Will, a therapist who is dealing with his own pain. When a desperate patient unexpectedly shows up at their home seeking help, he leaves behind a terrifying supernatural entity that preys on families and feeds on the suffering of its victims. “The Boogeyman,” directed by Rob Savage (“Host”) with a screenplay by Scott Beck & Bryan Woods (“A Quiet Place”) and Mark Heyman (“Black Swan”) and a screen story by Scott Beck & Bryan Woods based upon the short story by Stephen King, stars Sophie Thatcher (“Yellowjackets”), Chris Messina (“Birds of Prey”), Vivien Lyra Blair (“Obi-Wan Kenobi”), Marin Ireland (“The Umbrella Academy”), Madison Hu (“Bizaardvark”), LisaGay Hamilton (“Vice”), and David Dastmalchian (“Dune”).
                  </p>
                  <a
                    href="/book/2"
                    type="button"
                    className="rounded-3xl text-white
                      bg-gradient-to-r from-[#8DD816] to-[#0FC5EF]
                      px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal">
                    {t('book.more')}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div >
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
