import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Ecommerce from "../../Assets/E-Commerce.png";
import Weather from "../../Assets/weather.jpg";

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
              imgPath={Ecommerce}
              isBlog={false}
              title="E-commerce"
              description="Online Shoping Website"
              ghLink="https://github.com/mayasalalkar/E-commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather-application"
              description="In this app detect weather of differnts cities and countries"
              ghLink="https://github.com/mayasalalkar/Weather-application"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
