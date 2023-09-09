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
        <section className="w-auto flex sm:flex-row flex-col bg-cover bg-white m-20 text-[#828282]">
          <div className="flex sm:w-2/3">
            <iframe title="HERON&#39;S WAY ON SALE NOW" width="100%" height="481" src="https://www.youtube.com/embed/qlS97wcqSTw"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              id="widget2" allowFullScreen data-gtm-yt-inspected-9="true">
            </iframe>
          </div>
          <div className="sm:w-1/3">
            <p className="flex text-4xl text-[#060221] items-center justify-center my-5">
              {t('index.book1-name')}
            </p>
            <div className="flex text-2xl items-center justify-center my-5 mx-20">
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
        <section className="bg-fixed bg-cover bg-center bg-[url('/profile.jpeg')]">
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
        </section>

        <section className="w-auto m-10 md:m-20 text-[#828282] text-2xl h-full">
          <div className="flex sm:flex-row flex-col m-10 gap-10 sm:gap-32 h-full">

            <div className="w-full sm:w-1/2">
              <div className="items-center" >
                <img src="/heros-way.jpg" width="100%" height="100%" alt="logo" />
                <div className="mt-10 mb-3 text-center">
                  <a
                    href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                    type="button"
                    target="_blank"
                    className="rounded-3xl text-white
                      bg-gradient-to-r from-[#8DD816] to-[#0FC5EF]
                      px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal">
                    {t('index.buy')}
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full sm:w-1/2">
              <div className="items-center" >
                <img src="/mongoliv1.jpeg" width="100%" height="100%" alt="logo" />
                <div className="mt-10 mb-3 text-center">
                  <a
                    href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                    type="button"
                    target="_blank"
                    className="rounded-3xl text-white
                      bg-gradient-to-r from-[#8DD816] to-[#0FC5EF]
                      px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal">
                    {t('index.buy')}
                  </a>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* <section className="w-auto flex sm:flex-row flex-col bg-white">
          <div className="flex sm:w-1/3">
            <img src="/heros-way.jpg" alt="book" width={1600} />
          </div>
          <div className="sm:w-2/3 leading-10 text-[#98a2aa] text-2xl italic text-right whitespace-normal p-3 sm:p-10">
            <br />
            <p className="pb-10">
              {t('home.title-p1')}
            </p>
            <p className="pb-10">
              {t('home.title-p2')}
            </p>
            <p className="pb-10">
              {t('home.title-p3')}
            </p>
            <div>
              <a
                href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                type="button"
                target="_blank"
                className="rounded-3xl text-white
                bg-gradient-to-r from-[#8DD816] to-[#0FC5EF]
                px-7 pb-3 pt-[10px] text-sm font-medium uppercase leading-normal">
                {t('index.buy')}
              </a>
            </div>
          </div>
        </section>

        <section className="w-auto flex sm:flex-row flex-col bg-cover bg-[url('/bg.webp')] text-white text-2xl">
          <div className="flex sm:w-1/3 bg-gradient-to-r from-[#f4bb3a] to-[#f3b11c]">
            <div className="m-10">
              <p className="text-center">
                {t('home.quote1')}
              </p>
            </div>
          </div>
          <div className="flex sm:w-2/3">
            <div className="flex m-10">
              <div className="flex flex-row h-full">

                <div className="mr-10">
                  <div className="items-center">
                    <img src="/heros-way.jpg" width="100%" height="100%" alt="logo" />
                    <div className="mt-10 mb-3 text-center">
                      <a
                        href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                        type="button"
                        target="_blank"
                        className="rounded-3xl bg-blue-500 border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal">
                        {t('index.buy')}
                      </a>
                    </div>
                    <p className="text-base text-center">26 / 08 / 2023</p>
                  </div>
                </div>

                <div className="">
                  <div className="items-center" >
                    <img src="/mongoliv1.jpeg" width="100%" height="100%" alt="logo" />
                    <div className="mt-10 mb-3 text-center">
                      <a
                        href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                        type="button"
                        target="_blank"
                        className="rounded-3xl bg-blue-500 border-2 border-blue-500 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal">
                        {t('index.buy')}
                      </a>
                    </div>
                    <p className="text-base text-center">11 / 07 / 2023</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section> */}

      </div>
      {/* <Footer /> */}
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
