import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Biography() {
  const { t } = useTranslation("");

  return (
    <>
      <Navigation />
      <div className="bg-cover bg-[url('/bg.webp')]">
        <div className='sm:px-16 px-6 py-10 flex sm:flex-row flex-col'>
          <div className="flex sm:w-2/3 md:w-1/3 h-80">
            <img height="100%" width="100%" src="/profile.jpeg" alt="author picture" className='border-2 rounded-lg' />
          </div>
          <div className="sm:w-1/3 md:w-2/3 leading-10 text-white text-2xl italic text-right whitespace-normal p-10">
            <p className="pb-10">
              {t('biography.quote')}
            </p>
            <p className="pb-10">
              {t('biography.quote')}
            </p>
          </div>
        </div>
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
