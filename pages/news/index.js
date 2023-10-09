import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NEWS } from "../../constants/constants";
import NewsItem from "../../components/news-item";

export default function News() {
  const { t } = useTranslation("");

  return (
    <div className="text-[#14213d]">
      <section className="w-auto text-[#14213d] h-full">
        <br />
        <p className="text-3xl font-bold mb-4">
          {t('header.News')}
        </p>
        <br />
        <div className="flex flex-col gap-6 h-full mb-10">
          {NEWS.map(item => {
            return <NewsItem key={item.id} news={item} />
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
