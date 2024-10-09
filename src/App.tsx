import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Card from "./components/Card.tsx";


export default function App() {
    return (
        <div>
            <Navbar/>
            <Hero/>
            <Card
                img="katie-zaferes.png"
                rating={5.0}
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    )
}