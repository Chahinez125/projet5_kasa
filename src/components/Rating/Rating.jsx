import redStar from "./red-star.png";
import greyStar from "./grey-star.png";
import "./Rating.scss";


export default function Rating({ rating }) {
    const maxStars = 5;

    return (
        <div className="starr">
            {Array.from({ length: maxStars }, (_, i) => (
                <img key={i} src={i < rating ? redStar : greyStar} alt="rating" />
            ))}
        </div>
    );
}
