import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import memberImg1 from "../assets/img/person1.jpg";
import memberImg2 from "../assets/img/person2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Sponsors = () => {
  const sponsors = [
    {
      title: "IAW",
      description: "Company Type",
      imgUrl: memberImg1,
      linkedin: "https://www.linkedin.com/in/alexei-rusu/",
      github: "https://github.com/alexeirusu",
      instagram: "https://www.instagram.com/alexeirusu/",
    },
    {
      title: "Daniel Strujenco",
      description: "Entrepreneur and Investor",
      imgUrl: memberImg2,
      linkedin: "https://www.linkedin.com/in/victor-creciun/",
      github: "https://github.com/victor-creciun",
      instagram: "https://www.instagram.com/victor-creciun/",
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
                          {sponsors.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
