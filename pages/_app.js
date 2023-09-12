import Footer from "../components/footer";
import Navigation from "../components/my-navigation";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-[#252231] px-0 sm:px-10 md:px-20 lg:px-30 xl:px-60 2xl:px-80">
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default appWithTranslation(MyApp);
