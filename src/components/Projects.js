import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { MentorCard, PersonCard } from "./PersonCard";
import { ProjectCard } from "./ProjectCard";
import memberImg1 from "../assets/img/alexei-rusu.jpg";
import memberImg2 from "../assets/img/person2.jpg";
import memberImg3 from "../assets/img/cristi-preguza.jpg";
import mentorImg1 from "../assets/img//dumitru-moraru.jpg";
import projectImg1 from "../assets/img/car-img2.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const members = [
    {
      title: "Rusu Alexei",
      description: "Hardware & Software Developer",
      imgUrl: memberImg1,
      linkedin: "https://www.linkedin.com/in/alexei-rusu/",
      github: "https://github.com/alexeirusu",
      instagram: "https://www.instagram.com/alexeirusu/",
    },
    {
      title: "Creciun Victor",
      description: "Hardware & Software Developer",
      imgUrl: memberImg2,
      linkedin: "https://www.linkedin.com/in/victor-creciun/",
      github: "https://github.com/victor-creciun",
      instagram: "https://www.instagram.com/victor-creciun/",
    },
    {
      title: "Preguza Cristi",
      description: "Artificial Inteligence Developer",
      imgUrl: memberImg3,
      linkedin: "https://www.linkedin.com/in/stefan-andon/",
      github: "https://github.com/stefan-andon",
      instagram: "https://www.instagram.com/stefan-andon/",
    },
  ];

  const mentor = [
    {
      title: "Dumitru Moraru",
      description: "Faculty Lector",
      imgUrl: mentorImg1,
      linkedin: "https://www.linkedin.com/in/dumitru-moraru-824602255/",
      instagram: "https://www.instagram.com/kod_magister",
    },
  ];

  const projects = [
    {
      title: "Autonomous Car",
      imgUrl: projectImg1,
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
                  <h2>The Team</h2>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Members</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Mentor</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Projects</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {members.map((project, index) => {
                            return <PersonCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {mentor.map((project, index) => {
                            return <MentorCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
