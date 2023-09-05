import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Navigation />
      <div className="">
        <section className="w-auto flex sm:flex-row flex-col bg-cover bg-[url('/bg.webp')]">
          <div className="flex sm:w-1/3">
            <img src="/heros-way.jpg" alt="book" width={1600} />
          </div>
          <div className="sm:w-2/3 leading-10 text-white text-2xl italic text-right whitespace-normal p-3 sm:p-10">
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
                className="rounded-3xl bg-blue-500 border-2 border-blue-500 px-7 pb-3 pt-[10px] text-sm font-medium uppercase leading-normal">
                {t('index.buy')}
              </a>
            </div>
          </div>
        </section>

        <section className="w-auto flex sm:flex-row flex-col bg-cover bg-[url('/bg.webp')]">
          <div className="flex sm:w-2/3">
            <iframe title="HERON&#39;S WAY ON SALE NOW" width="100%" height="481" src="https://www.youtube.com/embed/qlS97wcqSTw"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              id="widget2" allowFullScreen data-gtm-yt-inspected-9="true">
            </iframe>
          </div>
          <div className="sm:w-1/3 text-white">
            <p className="flex text-2xl items-center justify-center my-5">
              {t('index.book1-name')}
            </p>
            <div className="flex items-center justify-center my-5">
              <img src="/heros-way.jpg" width={200} height={400} alt="book" />
            </div>
            <div className="flex items-center justify-center my-7">
              <a
                href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                type="button"
                target="_blank"
                className="rounded-3xl bg-blue-500 border-2 border-blue-500 px-7 pb-3 pt-[10px] text-sm font-medium uppercase leading-normal italic"
              >
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
        </section>
      </div>
      <Footer />
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
