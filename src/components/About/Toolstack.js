import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiVisualstudiocode,
  SiMedium,
  SiGithub,
  SiAdobeillustrator,
  SiNotion,
  SiFigma,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <SiMedium />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <SiNotion />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <SiWindows />
      </Col>
    </Row>
  );
}

export default Toolstack;
