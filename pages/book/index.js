import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../../components/my-navigation";
import Footer from "../../components/footer";
import BookItem from "../../components/book-item";
import { BOOKS } from "../../constants/constants";
// import { useRouter } from "next/router";

export default function Book() {
  const { t } = useTranslation("");
  // const { router } = useRouter()
  // console.log('qqqqqqq', router)

  return (
    <>
      {/* <Navigation /> */}
      <div className="bg-blue-50">
        <div className='sm:px-16 px-6 py-10'>
          <div className="">
            {BOOKS.map(item => {
              return <BookItem key={item.id} book={item} />
            })}
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
