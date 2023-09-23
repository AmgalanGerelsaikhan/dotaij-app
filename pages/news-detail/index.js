import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { NEWS } from "../../constants/constants";
import { useEffect, useState } from "react";
import NewsItem from "../../components/news-item";

export default function NewsDetail() {
  const { t, i18n } = useTranslation("");
  const router = useRouter();
  const newsId = router.query.newsId;
  const [news, setNews] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (newsId) {
      const newsDetail = NEWS.find((news) => news.id == newsId)
      setNews(newsDetail !== undefined ? newsDetail : null)
      setError(newsDetail === undefined ? 'News not found' : null)
    } else {
      setError("News not found")
    }
  }, [newsId])

  return (
    <>
      {news && (
        <div className="mt-10">
          <NewsItem news={news} />
        </div>
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
