import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../../components/my-navigation";
import Footer from "../../components/footer";
import BookItem from "../../components/book-item";
// import { useRouter } from "next/router";

const bookList = [
  {
    id: 1,
    name: 'Heros way',
    img: '/heros-way.jpg',
    published: '2023 / 08 / 27',
    desc: 'Dive into the captivating tale of "Heron\'s Way" where ancient Mongolia\'s mystique sets the stage. Follow Temujin, a scrawny boy bound by fate to become Chinggis Khan—the renowned, enigmatic leader. Marked by a birthmark, Temujin\'s journey from captivity to legendary leadership unfolds against a backdrop of nomadic tribes and shifting alliances. As a white falcon soars, it symbolizes power for these tribes.His escape from captors, his alliance with Tahir, an Arab merchant, and their journey along the Silk Road intricately weave his destiny. Mystical powers emerge, along with unexpected allies. On this journey, cultural diversity, spiritual quests, and the enigma of destiny converge. From a Taoist monastery to a Christian mission, Temujin evolves, embracing his extraordinary path. As the "saint" of Tangut Christians, his fate takes an unforeseen turn. Amidst rugged landscapes and historical tapestries, "Heron\'s Way" intertwines adventure, spirituality, and destiny. It\'s a mesmerizing saga that will captivate readers of historical fiction and young adult adventures alike.'
  },
  {
    id: 2,
    name: 'Mongoliv',
    img: '/mongoliv1.jpeg',
    published: '2023 / 07 / 10',
    desc: 'In this startling psychological thriller, a killer is targeting young women in New York City and is obsessed with Michael Bennetts daughter. A killer is obsessed...with Detective Michael Bennett’s oldest daughter.  Michael Bennett is obsessed... with keeping his family safe.  New York City is obsessed...with cracking the killer’s code.  You will be obsessed...with this startling psychological'
  }
]

export default function Book() {
  const { t } = useTranslation("");
  // const { router } = useRouter()
  // console.log('qqqqqqq', router)

  return (
    <>
      <Navigation />
      <div className="bg-blue-50">
        <div className='sm:px-16 px-6 py-10'>
          <div className="">
            {bookList.map(item => {
              return <BookItem key={item.id} book={item} />
            })}
          </div>
        </div>
      </div>
      <Footer />
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
