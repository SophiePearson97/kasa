import "./Collapses.css";
import Collapse from "../Collapse/Collapse";

function Collapses({ description, equipments }) {
  return (
    <div className="collapses">
      <Collapse title="Description">
        <p style={{ margin: 0 }}>{description}</p>
      </Collapse>

      <Collapse title="Amenities">
        <ul className="equipments">
          {equipments.map((eq) => (
            <li key={eq}>{eq}</li>
          ))}
        </ul>
      </Collapse>
    </div>
  );
}

export default Collapses;