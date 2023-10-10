<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import MySwiper from "../components/my-swiper1";
import { BOOKS } from "../constants/constants";
import HomeItem from "../components/home-item";
import RegisterForm from "../components/form-registration";


export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <div className="">

        <session className="">
          <div className="bg-[#fcfaf9] w-full">
            <MySwiper />
          </div>
        </session>


        {/* new releases large */}
        <section className="w-auto text-[#14213d] h-full mt-5">
          <div className="flex flex-col gap-5 h-full">
            <p className="flex text-3xl font-bold">
              {t('index.new-releases')}
            </p>

            {BOOKS.map(item => {
              return <HomeItem key={item.id} book={item} />
            })}


          </div>
        </section>

                {/* Trailer */}
                <section className="w-auto text-[#14213d] h-full mt-5">
  <div className="flex flex-col gap-5 h-full">
    <p className="flex text-3xl font-bold">
      {t('index.trailer')}
    </p>

    {/* Embed YouTube video */}
    <div className="flex justify-center text-center items-center">
                        <div className="w-full md:w-[600px] my-10 justify-center">
                            <iframe title="HERON&#39;S WAY ON SALE NOW" width="100%" height="350" src='https://www.youtube.com/embed/qlS97wcqSTw'
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                id="widget2" allowFullScreen data-gtm-yt-inspected-9="true">
                            </iframe>
                        </div>
                    </div>
  </div>
</section>


        {/* coming soon */}
        <section className="w-full mt-10 text-[#14213d]">
          <div className="flex flex-col sm:flex-row gap-10 md:gap-40">
            <div className="h-full w-full sm:w-1/2">
              <p className="flex text-3xl font-bold">
                {t('home.coming-soon')}
              </p>

              <div className="bg-[#ffffff] mt-10 h-80 md:h-full py-12 px-10">
                <p className="mb-6 text-[#14213d]">{t('home.coming-text')}</p>
              </div>

            </div>
            <div className="h-full w-full sm:w-1/2">
              <p className="flex text-3xl font-bold">
                {t('home.latest')}
              </p>

              <div className="bg-[#ffffff] mt-10 h-full py-12 px-10">
                <p className="text-1xl font-bold">Tsogtsaikhan was interviewed by a well-known Mongolian newspaper.</p>
                <p className="text-sm text-[#14213d]">Posted: July 7th, 2023 12:24:45 pm</p>
                <p className="mt-6 text-[#14213d]">Tsogtsaikhan had an interview with R.Oyunjargal, and during the interview, they covered topics related to Secret history of Mongols and 'Heron's Way.</p>
                <p className="align-text-bottom mt-6">
                  <a className="align-text-bottom mt-4" href='https://www.unuudur.mn/a/258036' target="_blank">{t('home.latest-more')}</a>
                </p>
              </div>

              <div className="bg-[#ffffff] mt-10 h-full py-12 px-10">
                <p className="text-1xl font-bold">Tsogtsaikhan was interviewed by a well-known Ukrainian newspaper </p>
                <p className="text-sm text-[#14213d]">Posted: July 14th, 2023 12:24:45 pm</p>
                <p className="mt-6 text-[#14213d]">Tsogtsaikhan was interviewed on 'Vechirniy Kyiv' newspaper, where they discussed topics related to Secret history of Mongols and 'Heron's Way.</p>
                <p className="align-text-bottom mt-6">
                  <a className="align-text-bottom text-xm" href='https://vechirniy.kyiv.uahirniy.kyiv.ua/news/85477/?fbclid=IwAR3CV86jMP7uV6IV_jhOw2Bm4eDPxJ2lHsm_kjs4rJSCGePx9SQYpCw20P42' target="_blank">Read more</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section className="w-full h-full text-[#14213d] bg-red-500 mt-20">
          <div className="flex ">
            <div className="m-20 flex flex-col sm:flex-row gap-10 sm:gap-20">
              <div className="h-full w-full sm:w-1/2">
                <p className="text-4xl text-yellow-500">
                  Get all the latest Tsogtsaikhan Tsedensonom news and info sent to your inbox.
                </p>
              </div>

              <div className="h-full w-full sm:w-1/2">
                <div className="bg-[#252231]">
                  <RegisterForm />
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
