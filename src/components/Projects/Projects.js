import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Blog from "../../Assets/Projects/Blog.png";
import Netflixclone from "../../Assets/Projects/Netflixclone.png";
import Pokemon from "../../Assets/Projects/Pokemon.png";
import Plura from "../../Assets/Projects/Plura.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Plura}
              isBlog={false}
              title="Plura"
              description="Multivendor B2B2B SaaS Website Builder with Project Management And Dashboard,Funnel builder, Role-based Access,Subscription plans , Light & Dark mode."
              ghLink="https://github.com/harshitp002/SaaS-Website-Builder"
              demoLink="https://github.com/harshitp002/SaaS-Website-Builder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Netflixclone}
              isBlog={false}
              title="Netflix-clone"
              description="Build Netflix-clone with CI/CD Pipelines where you can find wide range of movies."
              ghLink="https://github.com/harshitp002/Netflix-clone"
              demoLink="https://github.com/harshitp002/Netflix-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pokemon}
              isBlog={false}
              title="Pokemon"
              description="Developed a web application to Search, Compare, Add Pokemon’s"
              ghLink="https://github.com/harshitp002/Pokemon-REACT"
              demoLink="https://github.com/harshitp002/Pokemon-REACT"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="Blogify"
              description="From thought-provoking articles to expert tips and engaging narratives, our blog websites offer a diverse array of topics that cater to all interests"
              ghLink="https://github.com/harshitp002/Blog-App--MERN"
              demoLink="https://github.com/harshitp002/Blog-App--MERN"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
