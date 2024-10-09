
export default function Card(props) {

    return (
        <div className="card--container">
            {props.item.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`src/assets/${props.item.coverImg}`} className="card--image" alt="image of hero"/>
            <div className="card--stats">
                <img src="src/assets/star.png" alt="star graphics" className="card--star"/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <h2 className="card--title">{props.item.title}</h2>
            <p><span className="bold card--price">From ${props.item.price}</span>/ person</p>
        </div>
    )
}


