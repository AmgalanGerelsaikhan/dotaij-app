import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GalleryImage from "../components/GalleryImage"; // Create a GalleryImage component for displaying images


export default function Biography() {
  const { t } = useTranslation("");

  // Sample image data (replace with your own images)
  const galleryImages = [
    "/Author.jpg",
    "/mongoliv1.jpeg",
    "/heros-way.jpg",
    "/Author.jpg",
    "/mongoliv1.jpeg",
    "/heros-way.jpg",
    "/Author.jpg",
    "/mongoliv1.jpeg",
    "/heros-way.jpg",
  ];

  return (
    <>
      <div className="bg-gray-800 text-white py-10">
        <div className="container mx-auto flex flex-col md:flex-row">
          {/* Left Sidebar (Navigation) */}
          <aside className="w-full md:w-1/4 px-6">
            {/* Navigation links */}
            <nav className="sticky top-10">
              <ul>
                <li><a href="#authorBio" className="text-lg text-gray-400 hover:text-white">Author Biography</a></li>
                <li><a href="#pressBio" className="text-lg text-gray-400 hover:text-white">Press Biography</a></li>
                <li><a href="#photoGallery" className="text-lg text-gray-400 hover:text-white">Photo Gallery</a></li>
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
                  src="/author.jpg"
                  alt="author picture"
                  className="border-2 rounded-lg w-72"
                />
              </div>
              <div className="text-justify">
                <h1 id="authorBio" className="text-4xl font-bold mb-4">The Author</h1>
                <h1 className="text-1xl mb-1 text-gray-300">WRITTEN BY</h1>
                <h1 className="text-1xl mb-3" style={{ color: '#f1faee' }}>
                  Tsogtsaikhan, updated by Amgalan
                </h1>
                <p className="text-lg text-gray-400 mb-3 text-justify">
                  {t('biography.quote1')}
                </p>
              </div>

              <div className="text-lg text-gray-400 mb-3 text-justify">
                <p>
                  {t('biography.quote2')}
                </p>
                <p>
                  {t('biography.quote3')}
                </p>
                <p>
                  {t('biography.quote4')}
                </p>
                <p>
                  {t('biography.quote5')}
                </p>
                <p>
                  {t('biography.quote6')}
                </p>
                <p>
                  {t('biography.quote7')}
                </p>
              </div>
              {/* End of Author Biography */}

              {/* Press Biography */}
              <h1 id="pressBio" className="text-4xl font-bold mb-4 container mx-auto">Press Biography</h1>
              <p className="text-lg text-gray-400 mb-3 text-justify">
                Tsogtsaikhan Tsedensonom, a prominent author and activist, hailing from Ulaanbaatar, Mongolia, has made significant contributions to literature and social causes.
              </p>
              <p className="text-lg text-gray-400 mb-3 text-justify">
                Known for his book 'HERON'S WAY: Youth of Genghis Khan,' Tsogtsaikhan's literary work has garnered international acclaim, shedding light on the early life of the legendary Genghis Khan.
              </p>
              <p className="text-lg text-gray-400 mb-3 text-justify">
                In addition to his literary pursuits, Tsogtsaikhan has played a pivotal role in Mongolia's political landscape. His activism led to the withdrawal of critical land laws, preserving the nation's political and economic stability.
              </p>
              <p className="text-lg text-gray-400 mb-3 text-justify">
                Tsogtsaikhan's dedication to cross-cultural exchange is evident in his translation of 'The Secret History of the Mongols' into Ukrainian, fostering a deeper understanding of Mongolian history.
              </p>
              {/* End of Press Biography */}

              <h1 id="photoGallery" className="text-4xl font-bold mb-4 mx-auto">Photo Gallery</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                  <div key={index} className="p-2">
                    <img src={image} alt={`Image ${index + 1}`} className="w-full h-auto rounded-lg" />
                  </div>
                ))}
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
