import { useTranslation } from "next-i18next";

export default function NewsItem({ news }) {
    const { t, i18n } = useTranslation("");

    return (
        <div className="divide-y divide-gray-500">
            <div className="text-[#14213d] mb-10">
                <a className="text-1xl font-bold" href={`/news-detail?newsId=${news.id}`}>{i18n.language === 'uk' ? news.titleUk : news.title}</a>
                <p className="text-sm text-[#14213d]">{t('news.posted')}: {news.posted}</p>
                <p className=" mt-5">{i18n.language === 'uk' ? news.descUk : news.desc}</p>
                {news.watch !== "" && (
                    <div className="flex justify-center text-center items-center">
                        <div className="w-full md:w-[600px] my-10 justify-center">
                            <iframe title="HERON&#39;S WAY ON SALE NOW" width="100%" height="350" src={news.watch}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                id="widget2" allowFullScreen data-gtm-yt-inspected-9="true">
                            </iframe>
                        </div>
                    </div>
                )}
                {news.img !== "" && (
                    <div className="flex justify-center text-center items-center mt-5">
                        <img src={news.img} className="w-full md:w-3/5" />
                    </div>
                )}
                {news.more !== "" && (
                    <a href={news.more} target="_blank">{t('news.more')}</a>
                )}
            </div>
            <p className="mb-5"></p>
        </div>
    );
}
