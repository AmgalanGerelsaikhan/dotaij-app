import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import MySwiper from "../components/my-swiper1";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="">

        <session className="">
          <div className="bg-[#29292a] w-full">
            <MySwiper />
          </div>
        </session>


        {/* new releases large */}
        <section className="w-auto text-white h-full mt-6">
          <div className="flex flex-col gap-10 h-full">
            <p className="flex text-4xl">
              {t('index.new-releases')}
            </p>


            <div className="w-full h-full bg-black text-center items-center justify-center">
              <div className="flex flex:col md:flex-row gap-5 h-full text-center">
                <div className="w-full md:w-2/5 items-center justify-center relative">
                  <div className="w-full h-full bg-cover bg-[url('/heros-way.jpg')] bg-center blur-sm">
                  </div>
                </div>
                {/* ml-12  */}
                <img className="m-auto text-center ml-12 object-contain absolute w-60 h-96 mt-20 hover:w-64 hover:h-96" src="/heros-way.jpg" alt="logo" />

                <div className="w-full md:w-3/5 my-10 mx-20 text-left">
                  <p className="text-2xl">Heron's way</p>
                  <p className="text-gray-600 text-sm pb-2">
                    Release Date: June 2nd, 2023
                  </p>
                  <p className="mb-6 text-gray-400">
                    “The Boogeyman,” a horror-thriller from the mind of best-selling author Stephen King, opens June 2, 2023, in theaters nationwide. High school student Sadie Harper and her younger sister Sawyer are reeling from the recent death of their mother and aren’t getting much support from their father, Will, a therapist who is dealing with his own pain. When a desperate patient unexpectedly shows up at their home seeking help, he leaves behind a terrifying supernatural entity that preys on families and feeds on the suffering of its victims. “The Boogeyman,” directed by Rob Savage (“Host”) with a screenplay by Scott Beck & Bryan Woods (“A Quiet Place”) and Mark Heyman (“Black Swan”) and a screen story by Scott Beck & Bryan Woods based upon the short story by Stephen King, stars Sophie Thatcher (“Yellowjackets”), Chris Messina (“Birds of Prey”), Vivien Lyra Blair (“Obi-Wan Kenobi”), Marin Ireland (“The Umbrella Academy”), Madison Hu (“Bizaardvark”), LisaGay Hamilton (“Vice”), and David Dastmalchian (“Dune”). The producers are Shawn Levy (“Stranger Things”), Dan Levine (“Arrival”), and Dan Cohen (“The Adam Project”), with John H. Starke (“Sicario”), Emily Morris (“Rosaline”), Scott Beck, Bryan Woods, Ryan Cunningham, Adam Kolbrenner (“The Tomorrow War”), and Robin Meisinger serving as executive producers.
                  </p>

                  <div>
                    <div>
                      <a
                        href="https://www.youtube.com/watch?v=qlS97wcqSTw"
                        target="_blank"
                        className="uppercase mb-6">
                        {t('book.trailer')}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`/book?bookId=${1}`}
                        type="button"
                        className="uppercase leading-normal">
                        {t('book.more')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-full bg-black text-center items-center justify-center">
              <div className="flex flex:col md:flex-row gap-5 h-full text-center">
                <div className="w-full md:w-2/5 items-center justify-center relative">
                  <div className="w-full h-full bg-cover bg-[url('/heros-way.jpg')] bg-center blur-sm">
                  </div>
                </div>
                {/* ml-12  */}
                <img className="m-auto text-center ml-12 object-contain absolute w-60 h-96 mt-20 hover:w-64 hover:h-96" src="/mongoliv1.jpeg" alt="logo" />

                <div className="w-full md:w-3/5 my-10 mx-20 text-left">
                  <p className="text-2xl">Mongoliv</p>
                  <p className="text-gray-600 text-sm pb-2">
                    Release Date: June 2nd, 2023
                  </p>
                  <p className="mb-6 text-gray-400">
                    “The Boogeyman,” a horror-thriller from the mind of best-selling author Stephen King, opens June 2, 2023, in theaters nationwide. High school student Sadie Harper and her younger sister Sawyer are reeling from the recent death of their mother and aren’t getting much support from their father, Will, a therapist who is dealing with his own pain. When a desperate patient unexpectedly shows up at their home seeking help, he leaves behind a terrifying supernatural entity that preys on families and feeds on the suffering of its victims. “The Boogeyman,” directed by Rob Savage (“Host”) with a screenplay by Scott Beck & Bryan Woods (“A Quiet Place”) and Mark Heyman (“Black Swan”) and a screen story by Scott Beck & Bryan Woods based upon the short story by Stephen King, stars Sophie Thatcher (“Yellowjackets”), Chris Messina (“Birds of Prey”), Vivien Lyra Blair (“Obi-Wan Kenobi”), Marin Ireland (“The Umbrella Academy”), Madison Hu (“Bizaardvark”), LisaGay Hamilton (“Vice”), and David Dastmalchian (“Dune”). The producers are Shawn Levy (“Stranger Things”), Dan Levine (“Arrival”), and Dan Cohen (“The Adam Project”), with John H. Starke (“Sicario”), Emily Morris (“Rosaline”), Scott Beck, Bryan Woods, Ryan Cunningham, Adam Kolbrenner (“The Tomorrow War”), and Robin Meisinger serving as executive producers.
                  </p>

                  <div>
                    <div>
                      <a
                        href="https://www.youtube.com/watch?v=qlS97wcqSTw"
                        target="_blank"
                        className="uppercase mb-6">
                        {t('book.trailer')}
                      </a>
                    </div>
                    <div>
                      <a
                        href={`/book?bookId=${2}`}
                        type="button"
                        className="uppercase leading-normal">
                        {t('book.more')}
                      </a>
                    </div>
                  </div>
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
