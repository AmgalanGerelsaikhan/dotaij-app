import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "../../components/my-navigation";
import Footer from "../../components/footer";
import BookItem from "../../components/book-item";
import { useRouter } from "next/router";
import { BOOKS } from "../../constants/constants";
import Modal from "../../components/modal";
import { useState } from "react";

export default function BookDetail() {
  const { t } = useTranslation("");
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  console.log('query', router.query)

  const book = BOOKS.filter(f => f.id == router.query.bookId)[0];
  return (
    <>
      {book ? (
        <div className="text-white py-10">
          <div className="w-full mx-auto flex flex-col md:flex-row">
            {/* Left Sidebar (Navigation) */}
            <aside className="invisible sm:visible w-full md:w-1/4">
              {/* Navigation links */}
              <nav>
                <ul>
                  <li><a href="#synopsis" className="text-lg hover:text-white hover:font-bold">Synopsis</a></li>
                  <li><a href="#notes" className="text-lg text-gray-400 hover:text-white hover:font-bold">Notes</a></li>
                  <li><a href="#links" className="text-lg text-gray-400 hover:text-white hover:font-bold">Links</a></li>
                  <li><a href="#works" className="text-lg text-gray-400 hover:text-white hover:font-bold">Related works</a></li>
                  <li><a href="#discussion" className="text-lg text-gray-400 hover:text-white hover:font-bold">Discussion</a></li>
                </ul>
              </nav>
            </aside>

            <main className="w-full md:w-3/4 px-4">
              <section id="synopsis">
                <div className="w-full grid grid-cols-2 mb-4">
                  <div className="mr-5">
                    <img
                      onClick={() => setIsOpen(true)}
                      src={book.img}
                      alt="book picture"
                      className="rounded-lg w-72 h-auto"
                    />
                  </div>
                  <div className="">
                    <p id="synopsis" className="text-4xl mb-3">{book.name}</p>
                    <p className="text-1xl mb-1 text-gray-300">Released: {book.published}</p>
                    <p className="text-1xl mb-1 text-gray-300">Available formats: Deluxe Slipcased Gift Edition</p>
                    <p className="text-1xl mb-1 text-gray-300">Publisher: Tsogtsaikhan</p>
                  </div>
                </div>

                <div className="" id="notes">
                  <p className="text-2xl">Notes</p>
                  <p className="text-lg text-gray-400 mb-3 text-justify">
                    {book.desc}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  <div className="" id="links">
                    <p className="text-2xl">Links</p>
                    <p className="text-lg text-gray-400 mb-3 text-justify">
                      {book.desc}
                    </p>
                  </div>

                  <div className="" id="works">
                    <p className="text-2xl">Related Works</p>
                    <p className="text-lg text-gray-400 mb-3 text-justify">
                      {book.desc}
                    </p>
                  </div>
                </div>

                <div className="" id="discussion">
                  <p className="text-2xl">Discussion</p>
                  <p className="text-lg text-gray-400 mb-3 text-justify">
                    {book.desc}
                  </p>
                </div>

              </section>
            </main>
          </div>
        </div>
      ) : (
        <h2 className="text-white">Not found</h2>
      )}

      <div id="modal-root">
        {isOpen &&
          <Modal onClose={() => setIsOpen(false)} bgImage={book.img}>
            Hello from the modal!
          </Modal>
        }
      </div>
    </>
  );
}

// export async function getStaticPaths() {
//   const paths = BOOKS.map((book) => ({
//     params: { bookId: book.id.toString() },
//   }))

//   return { paths, fallback: false }
// }

export async function getStaticProps({ locale, params }) {
  console.log('params 111', params)
  return {
    props: {
      ...params,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
