import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BookItem from "../components/BookItem";

const bookList = [
    {
        id: 1,
        name: 'Heros way',
        img: '/heros-way.jpg',
        published: '2023 / 08 / 27',
        desc: 'Veena Lion and Cooper Lamb are rival PIs in Philadelphia in this “fun ride…the romance between Cooper and Veena is artfully handled...endearing characters including Cooper’s two preternaturally clever kids and his Rhodesian ridgeback puppy.” –Publishers Weekly The city is in a state of shock over the fate of two hometown heroes: Eagles'
    },
    {
        id: 2,
        name: 'Obsessed',
        img: '/heros-way.jpg',
        published: '2023 / 07 / 10',
        desc: 'In this startling psychological thriller, a killer is targeting young women in New York City and is obsessed with Michael Bennetts daughter. A killer is obsessed...with Detective Michael Bennett’s oldest daughter.  Michael Bennett is obsessed... with keeping his family safe.  New York City is obsessed...with cracking the killer’s code.  You will be obsessed...with this startling psychological'
    }
]
export default function Books() {
    return (
        <div>
            <NavBar />
            <div className="md:mx-52 sm:mx-10 mt-32">
                {bookList.map(item => {
                    return <BookItem key={item.id} book={item} />
                })}
            </div>
            <Footer />
        </div>
    )
}