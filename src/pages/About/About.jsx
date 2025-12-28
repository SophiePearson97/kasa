import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutBanner from "../../assets/about-banner.jpg";

function About() {
  return (
    <main className="kasa-container" style={{ paddingBottom: "20px" }}>
      <Banner imageSrc={aboutBanner} text="" />

      <div style={{ maxWidth: "1023px", margin: "38px auto 0", display: "flex", flexDirection: "column", gap: "30px" }}>
        <Collapse title="Reliability">
          <p style={{ margin: 0 }}>
            The ads posted on Kasa guarantee total reliability. The photos match the accommodation, and all information is regularly checked by our teams.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p style={{ margin: 0 }}>
            Respect is one of Kasa’s founding values. Any discriminatory behaviour will result in exclusion from our platform.
          </p>
        </Collapse>

        <Collapse title="Service">
          <p style={{ margin: 0 }}>
            Our teams are available 24/7 to provide you with an optimal experience. Do not hesitate to contact us if you have any questions.
          </p>
        </Collapse>

        <Collapse title="Security">
          <p style={{ margin: 0 }}>
            Security is a priority for Kasa. Both our hosts and guests are verified, and our support team is ready to assist you at any time.
          </p>
        </Collapse>
      </div>
    </main>
  );
}

export default About;