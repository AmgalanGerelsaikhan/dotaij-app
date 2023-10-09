import Footer from "../components/footer";
import Navigation from "../components/my-navigation";
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Navigation />
    <div className="bg-[#fcfaf9] px-0 sm:px-10 md:px-20 lg:px-30 xl:px-40 2xl:px-52">
      <Component {...pageProps} />
      <Footer />
    </div>
    </div>
  );
}

export default appWithTranslation(MyApp);
