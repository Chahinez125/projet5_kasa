import { useState } from 'react';
import './Carrousel.scss';
import left from "./left_arrow.png";
import right from "./right_arrow.png";

export default function Carrousel({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + images.length) % images.length);
    };

    return (
        <div className="carrousel">
            {images.length > 1 && (
                <div className="button-slide">
                    <img src={left} className="left" alt="left arrow" onClick={prevSlide} />
                    <img src={right} className="right" alt="right arrow" onClick={nextSlide} />
                </div>
            )}
            <div className="slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Slide ${index}`} className="slides" />
                ))}
            </div>
            {images.length > 1 && (
                <div className="imgNumber">
                    {currentSlide + 1} / {images.length}
                </div>
            )}
        </div>
    );
}