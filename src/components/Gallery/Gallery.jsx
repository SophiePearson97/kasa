import { useState } from "react";
import "./Gallery.scss";

function Gallery({ pictures }) {
  const [index, setIndex] = useState(0);

  const hasMultiple = pictures && pictures.length > 1;

  const goPrev = () => {
    setIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const goNext = () => {
    setIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  if (!pictures || pictures.length === 0) return null;

  return (
    <section className="gallery">
      <img className="gallery__image" src={pictures[index]} alt="" />

      {hasMultiple && (
        <>
          <button className="gallery__btn gallery__btn--left" onClick={goPrev} aria-label="Previous image">
            ‹
          </button>
          <button className="gallery__btn gallery__btn--right" onClick={goNext} aria-label="Next image">
            ›
          </button>
          <div className="gallery__count">
            {index + 1}/{pictures.length}
          </div>
        </>
      )}
    </section>
  );
}

export default Gallery;