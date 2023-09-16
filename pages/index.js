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
          <div className="bg-[#29292a] w-full">
            <MySwiper />
          </div>
        </session>


        {/* new releases large */}
        <section className="w-auto text-white h-full mt-10">
          <div className="flex flex-col gap-10 h-full">
            <p className="flex text-4xl">
              {t('index.new-releases')}
            </p>

            {BOOKS.map(item => {
              return <HomeItem key={item.id} book={item} />
            })}


          </div>
        </section>

        {/* coming soon */}
        <section className="w-full mt-10 text-white">
          <div className="flex flex-col sm:flex-row gap-10 md:gap-40">
            <div className="h-full w-full sm:w-1/2">
              <p className="text-4xl">
                {t('home.coming-soon')}
              </p>

              <div className="bg-black mt-10 h-80 md:h-full py-12 px-10">
                <p className="text-xl">There are no works coming out in the immediate future. Please check back later.</p>
              </div>

            </div>
            <div className="h-full w-full sm:w-1/2">
              <p className="text-4xl">
                {t('home.latest')}
              </p>

              <div className="bg-black mt-10 h-full py-12 px-10">
                <p className="text-xl">Stephen on CBS Saturday Morning</p>
                <p className="text-sm text-gray-400">Posted: September 9th, 2023 12:24:45 pm</p>
                <p className="mt-4">Stephen sat down with Jeff Glor and the interview aired on CBS Saturday Morning, September 9th, 2023.</p>
                <p className="uppercase text-gray-400 text-sm mt-10">
                  <a className="" href="https://youtube.com" target="_blank">Watch on youtube</a>
                </p>
                <p className="align-text-bottom mt-6">
                  <a className="align-text-bottom">Read more</a>
                </p>
              </div>

              <div className="bg-black mt-10 h-full py-12 px-10">
                <p className="text-xl">Stephen on CBS Saturday Evening</p>
                <p className="text-sm text-gray-400">Posted: September 9th, 2023 12:24:45 pm</p>
                <p className="mt-4">Stephen sat down with Jeff Glor and the interview aired on CBS Saturday Morning, September 9th, 2023.</p>
                <p className="uppercase text-gray-400 text-sm mt-10">
                  <a className="" href="https://youtube.com" target="_blank">Watch on youtube</a>
                </p>
                <p className="align-text-bottom mt-6">
                  <a className="align-text-bottom">Read more</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* contact */}
        <section className="w-full h-full text-white bg-red-500 mt-20">
          <div className="flex ">
            <div className="m-20 flex flex-col sm:flex-row gap-10 sm:gap-20">
              <div className="h-full w-full sm:w-1/2">
                <p className="text-4xl text-yellow-500">
                  Get all the latest Stephen King news and info sent to your inbox.
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
