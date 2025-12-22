import "./Banner.scss";

function Banner({ imageSrc, text }) {
  return (
    <section className="banner">
      <img className="banner__image" src={imageSrc} alt="" />
      <div className="banner__overlay" />
      <h1 className="banner__text">{text}</h1>
    </section>
  );
}

export default Banner;