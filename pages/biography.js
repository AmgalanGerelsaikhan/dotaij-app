import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GalleryImage from "../components/GalleryImage"; // Create a GalleryImage component for displaying images
import MyGallery from "../components/my-gallery";
import { GALLERIES_BIOGRAPHY } from "../constants/constants";


export default function Biography() {
  const { t } = useTranslation("");

  return (
    <>
      <div className="text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* Left Sidebar (Navigation) */}
          <aside className="w-full md:w-1/6 px-6">
            {/* Navigation links */}
            <nav className="sticky top-20">
              <ul>
                <li><a href="#authorBio" className="text-lg text-gray-400 hover:text-white"> {t('biography.section1')}</a></li>
                <li><a href="#pressBio" className="text-lg text-gray-400 hover:text-white"> {t('biography.section2')}</a></li>
                <li><a href="#photoGallery" className="text-lg text-gray-400 hover:text-white">{t('biography.section3')}</a></li>
                {/* Add more navigation links */}
              </ul>
            </nav>
          </aside>

          {/* Center Column (Author Name and Quote) */}
          <main className="w-full md:w-3/4 px-4">
            {/* Author Info Section */}
            <section id="authorInfo" className="">
              <div className="float-left mr-5">
                <img
                  src="/author.png"
                  alt="author picture"
                  className="border-2 rounded-lg w-72"
                />
              </div>
              <div className="text-justify">
                <h1 id="authorBio" className="text-4xl font-bold mb-4" >{t('biography.section1')}</h1>
                <h1 className="text-1xl mb-1 text-gray-500">{t('biography.written')}</h1>
                <h1 className="text-1xl mb-1 text-gray-300 py-2" style={{ color: '#f1faee' }}>{t('biography.updated')}</h1>
                <p className="text-lg text-gray-400 mb-3 text-justify">{t('biography.quote1')}</p>
              </div>

              <div className="text-lg text-gray-400 mb-3 text-justify">
                <p className="py-3">
                  {t('biography.quote2')}
                </p>
                <p className="py-3">
                  {t('biography.quote3')}
                </p>
                <p className="py-3">
                  {t('biography.quote4')}
                </p>
                <p className="py-3">
                  {t('biography.quote5')}
                </p>
                <p className="py-3">
                  {t('biography.quote6')}
                </p>
                <p className="py-3">
                  {t('biography.quote7')}
                </p>
              </div>
              {/* End of Author Biography */}

              {/* Press Biography */}
              <h1 id="pressBio" className="text-4xl font-bold mb-4 container mx-auto">{t('biography.section2')}</h1>
              <p className="text-lg text-gray-400 mb-3 text-justify">
                {t('biography.pquote1')}
              </p>
              <p className="text-lg text-gray-400 mb-3 text-justify">
                {t('biography.pquote2')}
              </p>
              <p className="text-lg text-gray-400 mb-3 text-justify">
                {t('biography.pquote4')}
              </p>
              {/* End of Press Biography */}

              <h1 id="photoGallery" className="text-4xl font-bold mb-4 mx-auto">{t('biography.section3')}</h1>
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"> */}
              <MyGallery data={GALLERIES_BIOGRAPHY} />
              {/* {galleryImages.map((image, index) => (
                  <div key={index} className="p-2">
                    <img src={image} alt={`Image ${index + 1}`} className="w-60 h-80 rounded-lg" />
                  </div>
                ))} */}
              {/* </div> */}
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
