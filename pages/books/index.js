import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BookItem from "../../components/book-item";
import { BOOKS } from "../../constants/constants";

export default function Book() {
  const { t } = useTranslation("");

  return (
    // sm:px-16 px-6 py-10
    <div className="">
      <section className="w-auto text-white h-full">
        <div className="flex flex-col gap-10 h-full">
          <br />
          <p className="flex text-4xl m-5 sm:m-0">
            {t('header.Books')}
          </p>

          {BOOKS.map(item => {
            return <BookItem key={item.id} book={item} />
          })}
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
