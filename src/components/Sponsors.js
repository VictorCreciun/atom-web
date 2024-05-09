import { Container, Row, Col, Tab } from "react-bootstrap";
import { SponsorCompanyCard, SponsorPersonCard } from "./PersonCard"; // Modificat importurile pentru a include doar cardurile necesare
import memberImg1 from "../assets/img/iaw-logo-white.png";
import memberImg2 from "../assets/img/daniel-strujenco.jpg";
import memberImg3 from "../assets/img/utm-fcim-logo.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Sponsors = () => {
  const sponsors = [
    {
      title: "Strujenco Daniel",
      description: 'Founder of Construction Company "ProStyle Construct" SRL',
      imgUrl: memberImg2,
      type: "person",
    },
    {
      title: "IAW",
      description: "International Academy for Education and Training",
      imgUrl: memberImg1,
      website: "http://iawgroup.de/",
      type: "company",
    },
    {
      title: "Technical University of Moldova",
      description: "Faculty of Computers, Informatics and Microelectronics",
      imgUrl: memberImg3,
      website: "https://utm.md/en/",
      type: "company",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Sponsors</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Pane eventKey="first" className="sponsor-container">
                      <Row>
                        {sponsors.map((sponsor, index) => {
                          // Verifică tipul de sponsor și afișează componenta corespunzătoare
                          return sponsor.type === "company" ? (
                            <SponsorCompanyCard key={index} {...sponsor} />
                          ) : (
                            <SponsorPersonCard key={index} {...sponsor} />
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      ></img>
    </section>
  );
};
