import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
import Techstack from "./Language";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import styled from "styled-components";
import tw from "twin.macro";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
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
              paddingTop: "40px",
              paddingBottom: "50px",
              paddingLeft: "10px",
            }}
            className="about-img"
          >
            <img
              width="450px"
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1679906502/11602236_21004063_c6g3he-removebg-preview_ntr0cu.png"
              alt="about"
              className="img-fluid"
            />
          </Col>
        </Row>
        <h1 data-aos="fade-right" className="project-heading">
          Professional Skills
        </h1>

        <Techstack />

        <h1 className="project-heading">Tools I use</h1>

        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
