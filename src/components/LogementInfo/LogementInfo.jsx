import "./LogementInfo.css";
import TitleLocation from "../TitleLocation/TitleLocation";
import Tags from "../Tags/Tags";
import Rating from "../Rating/Rating";
import Host from "../Host/Host";
import Collapses from "../Collapses/Collapses";

function LogementInfo({ logement }) {
  return (
    <section className="logement-info">
      <div className="logement-info__top">
        <div className="logement-info__left">
          <TitleLocation title={logement.title} location={logement.location} />
          <Tags tags={logement.tags} />
        </div>

        <div className="logement-info__right">
          <Host host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      <Collapses description={logement.description} equipments={logement.equipments} />
    </section>
  );
}

export default LogementInfo;