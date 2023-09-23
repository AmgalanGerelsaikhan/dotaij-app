import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Events() {
  const { t } = useTranslation("");

  return (
    <>
      <div className="text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* Left Sidebar (Navigation) */}
          {/* Center Column (Author Name and Quote) */}
          <main className="w-full md:w-4/4 px-4">
            {/* Author Info Section */}
            <section id="News" className="">
              <div className="text-justify">
                <h1 id="title" className="text-4xl font-bold mb-4">{t('events.title')}</h1>
              </div>

              <div className="">
                <p className="text-1xl font-bold">{t('events.newstitle_3')}</p>
                <p className="text-sm text-gray-500 mb-6">2023-09-23 10:00 AM</p>
                <div className="flex items-center mb-3">
                  <p className="text-lg text-gray-400 mb-3 text-justify">{t('events.press_3')}</p>
                </div>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/watch?v=qlS97wcqSTw&t=4s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
               <hr className="border-t border-gray-300 mb-4 my-4" /> {/* Add the horizontal line */}
              </div>

              <div className="">
                <p className="text-1xl font-bold">{t('events.newstitle_1')}</p>
                <p className="text-sm text-gray-500 mb-6">2023-07-22 10:00 AM</p>
                <div className="flex items-center mb-3">
                  <p className="text-lg text-gray-400 mb-3 text-justify">{t('events.press_1')}</p>
                </div>
                <img src="/event_1.png" alt="Event Image" className="w-15 h-15 ml-2" />
                <a href="/https://www.unuudur.mn/a/258036" className="hover:underline">Read More</a>
                <hr className="border-t border-gray-300 mb-4 my-4" /> {/* Add the horizontal line */}
              </div>

              <div className="">
                <p className="text-1xl font-bold">{t('events.newstitle_2')}</p>
                <p className="text-sm text-gray-500 mb-6">2023-09-22 10:00 AM</p>
                <div className="flex items-center mb-3">
                  <p className="text-lg text-gray-400 mb-3 text-justify">{t('events.press_2')}</p>
                </div>
                <img src="/author_pic7.jpeg" alt="Event Image" className="w-15 h-15 ml-2" />
                <a href="/https://vechirniy.kyiv.uahirniy.kyiv.ua/news/85477/?fbclid=IwAR3CV86jMP7uV6IV_jhOw2Bm4eDPxJ2lHsm_kjs4rJSCGePx9SQYpCw20P42" className="hover:underline">Read More</a>
                <hr className="border-t border-gray-300 mb-4 my-4" /> {/* Add the horizontal line */}
              </div>
            </section>
          </main>
        </div>
      </div>
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
