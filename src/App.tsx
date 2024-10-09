import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Card from "./components/Card.tsx";
import data from "./data/data.ts"


export default function App() {

    const cardsData = data.map(item => {
            return (
                <Card
                    key={item.id}
                    item={item}
                />
            )
        }
    )


    return (
        <div>
            <Navbar/>
            <Hero/>
            <section className="cards--list">
                {cardsData}
            </section>
        </div>
    )
}