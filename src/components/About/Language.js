import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiGithub,
} from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiCss3, SiExpress } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <SiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <TbBrandNextjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <DiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <SiExpress />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <SiMongodb />
      </Col>
    </Row>
  );
}

export default Techstack;
