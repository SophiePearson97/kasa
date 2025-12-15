import logements from "../../data/logements.json";
import Banner from "../../components/Banner/Banner";
import CardsSection from "../../components/CardsSection/CardsSection";

import bannerHome from "../../assets/home-banner.jpg";

function Home() {
  return (
    <main className="kasa-container" style={{ paddingBottom: "20px" }}>
      <Banner
        imageSrc={bannerHome}
        text="At home, everywhere, and anywhere"
      />
      <CardsSection logements={logements} />
    </main>
  );
}

export default Home;