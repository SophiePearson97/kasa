import { useParams, Navigate } from "react-router-dom";
import logements from "../../data/logements.json";

import Gallery from "../../components/Gallery/Gallery";
import LogementInfo from "../../components/LogementInfo/LogementInfo";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="*" />;
  }

  return (
    <main className="kasa-container" style={{ paddingBottom: "20px" }}>
      <Gallery pictures={logement.pictures} />
      <LogementInfo logement={logement} />
    </main>
  );
}

export default Logement;