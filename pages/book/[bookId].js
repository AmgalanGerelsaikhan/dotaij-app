import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../../components/my-navigation";
import Footer from "../../components/footer";
import BookItem from "../../components/book-item";
import { useRouter } from "next/router";
import { BOOKS } from "../../constants/constants";

export default function BookDetail({ params }) {
  const { t } = useTranslation("");
  const router = useRouter()
  const { bookId } = router.query
  console.log({ router })
  console.log('params', params)

  return (
    <>
      {/* <Navigation /> */}
      <div className="bg-blue-50">
        <div className='sm:px-16 px-6 py-10'>
          <div className="">
            {bookId}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export async function getStaticPaths() {
  const paths = BOOKS.map((book) => ({
    params: { bookId: book.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ locale, params }) {
  console.log('params 111', params)
  return {
    props: {
      ...params,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
