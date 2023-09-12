import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../components/my-navigation";
import Footer from "../components/footer";

export default function Events() {
  const { t } = useTranslation("");

  return (
    <>
      {/* <Navigation /> */}
      <div className="sm:px-16 px-6 py-10 text-white">
        <h3>{t("events.title")}</h3>
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
