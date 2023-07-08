import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Language";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../Assets/image2.png";
AOS.init();

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em" }} data-aos="fade-right">
              ABOUT ME
            </h1>

            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{
              paddingBottom: "50px",
              paddingLeft: "10px",
            }}
            className="about-img"
          >
            <img width="auto" src={image} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 data-aos="fade-top" className="project-heading">
          Professional Skills
        </h1>

        <Techstack />

        <h1 data-aos="fade-top" className="project-heading">
          Tools I use
        </h1>

        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
