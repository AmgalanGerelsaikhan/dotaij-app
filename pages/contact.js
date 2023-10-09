import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/my-navigation";
import Footer from "../components/footer";
import Link from "next/link";

export default function Contact() {
  const { t } = useTranslation("");

  return (
    <>
      {/* <Navigation /> */}
      <div className="">
        <div className='sm:px-16 px-6 py-10'>
          <div className=" text-sm leading-6 text-left whitespace-normal">
            <div className='sm:flex'>
              <div className='sm:w-1/4 pl-8 pb-5'>
                <div className='hover:font-bold'>
                  <img src='/contact1.png' alt='contact address' />
                </div>
                <div className='mt-5 text-[#14213d]'>{t('contact.address')}</div>
                <div className='text-[#14213d] text-md'>
                  {t('contact.address-desc')}
                </div>
              </div>
              <div className='sm:w-1/4 pl-8 pb-5'>
                <div className=''>
                  <img src='/contact4.png' alt='contact address' />
                </div>
                <div className='mt-5 text-[#14213d]'>{t('contact.email')}</div>
                <div className='text-[#14213d] text-md'>
                  moguldotaij@gmail.com
                </div>
              </div>
              <div className='sm:w-1/4 pl-8 pb-5'>
                <div className=''>
                  <img src='/contact5.png' alt='contact address' />
                </div>
                <div className='mt-5 text-gray-500'>{t('contact.social-media')}</div>
                <div className='text-[#14213d] text-md'>
                  <Link href='https://www.facebook.com/tsogtsaikhan.tsedensonom' target='_blank'>
                    facebook
                  </Link>
                </div>
                <div className='text-[#14213d] text-md'>
                  <Link href='https://www.instagram.com/dotaijmogul/?hl=en' target='_blank'>
                    instagram
                  </Link>
                </div>
              </div>
              <div className='sm:w-1/4 pl-8 pb-5'>
                <div className=''>
                  <img src='/contact2.png' alt='contact address' />
                </div>
                <div className='mt-5 text-[#14213d]'>{t('contact.phone')}</div>
                <div className='text-[#14213d] text-md'>
                  976-99105238
                </div>
              </div>
            </div>
          </div>
        </div>
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
