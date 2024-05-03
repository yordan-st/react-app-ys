/* eslint-disable react/prop-types */
import starImg from '../assets/star.svg'

export default function Card(props) {
    let badgeText
    if (props.item.classNameopenSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <article className="card">
            {badgeText && <span className="card--label">{badgeText}</span>}
            <img 
                src={`src/assets/${props.item.coverImg}`}
                alt="Image of swimmer"
                className="card--img" />
            <div className="card--stats">
                <img
                    src={starImg}
                    className="card--star"
                    alt="Star icon " />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <h2>{props.item.title}</h2>
            <p className='card--price'><span className="bold">From ${props.item.price}</span> / person</p>
        </article>
    )
}