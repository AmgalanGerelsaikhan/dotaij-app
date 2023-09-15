import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BookItem from "../../components/book-item";
import { BOOKS } from "../../constants/constants";

export default function Book() {
  const { t } = useTranslation("");

  return (
    // sm:px-16 px-6 py-10
    <div className="text-white">
      <section className="w-auto text-white h-full">
  <br />
          <p className="text-4xl font-bold mb-4 sm:m-4 py-1">
            {t('header.Books')}
          </p>
          <div className="flex flex-col gap-10 h-full">
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
