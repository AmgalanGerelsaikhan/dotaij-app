import Link from "next/link";
import { useRouter } from "next/router";

export default function LocaleSwitcher() {
  const router = useRouter();

  const { locales, locale: activeLocale } = router;

  const otherLocales = locales?.filter(
    (locale) => locale !== activeLocale && locale !== "default"
  );

  const handleClick = () => {

  }

  return (
    <span className="text-muted cursor-pointer">
      {otherLocales?.map((locale) => {
        const { pathname, query, asPath } = router;
        return (
          <span key={"locale-" + locale}>
            <Link key={"locale-" + locale} href={{ pathname, query }} as={asPath} locale={locale} >
              <a>
                {locale === "uk" ? (
                  <img src="/uk.png" alt="ukraine language icon" height={30} width={30} />
                ) : (
                  <img src="/en.png" alt="english language icon" height={30} width={30} />
                )}
              </a>
            </Link>
          </span>
        );
      })}
    </span >
  );
}