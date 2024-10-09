
export default function Card(props) {

    return (
        <div className="card--container">
            <img src={`src/assets/${props.img}`} className="card--image" alt="katie-zaferes"/>
            <div className="card--stats">
                <img src="src/assets/star.png" alt="star graphics" className="card--star"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span>/ person</p>
        </div>
    )
}


