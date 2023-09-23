import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { BOOKS } from "../../constants/constants";
import { useEffect, useState } from "react";
import MyGallery from "../../components/my-gallery";
import { HiOutlineCalendar, HiOutlineBookOpen, HiOutlineDocument, HiViewBoards } from "react-icons/hi";

export default function BookDetail() {
  const { t, i18n } = useTranslation("");
  const router = useRouter();
  const bookId = router.query.bookId; // Get the bookId from router.query
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (bookId) {
      const bookDetail = BOOKS.find((book) => book.id == bookId)
      setNews(bookDetail !== undefined ? bookDetail : null)
      setError(bookDetail === undefined ? 'Book not found' : null)
    } else {
      setError("Book not found")
    }
  }, [bookId])

  return (
    <>
      {book && (
        <>
          <div className="text-white py-10 flex flex-col sm:flex-row">
            <div className="mr-0 sm:mr-8 sm:w-1/3 mb-5">
              <img src={book.img} alt="logo" className="w-60 sm:w-70 md:w-80 lg:w-96 m-auto sm:m-0" />
            </div>
            <div className="sm:w-2/3 m-auto sm:m-0">
              <a className="md:mt-5 text-2xl" href={`/book?bookId=${book.id}`} alt={book.name}>{i18n.language === 'uk' ? book.nameUk : book.name}</a>
              <p>{t('book.published')}: {book.published}</p>
              <hr
                className=" w-full my-6 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-50" />
              <p>{t('index.buy')}:</p>
              <div className="my-3 underline text-gray-400">
                <a href="https://www.amazon.com/Apple-Generation-Cancelling-Transparency-Personalized/dp/B0BDHWDR12/ref=lp_16225009011_1_1?sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D"
                  target="_blank" alt="amazon book link">Amazon</a>
              </div>
              <hr
                className=" w-full my-6 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-50" />
              <div className="flex flex-row text-center items-center m-0">
                <div className="w-1/4">
                  <p className="text-sm">{t('book.sale')}</p>
                  <HiOutlineCalendar size={50} className="m-auto" />
                  <p className="text-gray-400 text-sm">{book.published}</p>
                </div>

                <div className="w-1/4">
                  <p className="text-sm">{t('book.page-count')}</p>
                  <HiOutlineBookOpen size={50} className="m-auto" />
                  <p className="text-gray-400 text-sm">{book.pagecount} pages</p>
                </div>

                <div className="w-1/4">
                  <p className="text-sm">{t('book.publisher')}</p>
                  <HiOutlineDocument size={50} className="m-auto" />
                  <p className="text-gray-400 text-sm">{book.publisher}</p>
                </div>

                <div className="w-1/4">
                  <p className="text-sm">{t('book.isbn')}</p>
                  <HiViewBoards size={50} className="m-auto" />
                  <p className="text-gray-400 text-sm">{book.isbn}</p>
                </div>
              </div>
              <hr
                className=" w-full my-6 h-0.5 border-t-0 bg-neutral-500 opacity-100 dark:opacity-50" />
            </div>
          </div>

          <div className=" mx-10 sm:mx-0">
            <p className="text-white text-justify uppercase mb-4">{t('book.desc')}</p>
            <p className="text-gray-400 text-justify leading-8">
              {i18n.language === 'uk' ? book.descUk : book.desc}
            </p>
          </div>

          <h1 className="text-2xl text-white my-5">{t('book.gallery')}</h1>
          <MyGallery data={book.otherimg} />
        </>
      )}
      {error && (
        <h2 className="text-white mt-10">{error}</h2>
      )}
    </>
  )
}

export async function getStaticProps({ locale, params }) {
  return {
    props: {
      ...params,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
