import "./CardsSection.scss";
import Card from "../Card/Card";

function CardsSection({ logements }) {
  return (
    <section className="cards-section">
      <div className="cards-grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </section>
  );
}

export default CardsSection;