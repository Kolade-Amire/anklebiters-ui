export default function Card() {
    return (
        <div className="card--container">
            <img src="src/assets/katie-zaferes.png" className="card--image" alt="katie-zaferes"/>
            <div className="card--stats">
                <img src="src/assets/star.png" alt="star graphics" className="card--star"/>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <h2>Life Lessons with Katie Zaferes</h2>
            <p><span className="bold">From $136</span>/ person</p>
        </div>
    )
}