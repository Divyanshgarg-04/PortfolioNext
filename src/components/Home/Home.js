import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import Particle from "../Particle";
// import Home2 from "./Home2";
import Type from "./Typewritertext";
import styled from "styled-components";

const TitleText = styled.strong`
  background: #cf197a;
  background: linear-gradient(to right, #cf197a 14%, #218fcf 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col
              data-aos="fade-right"
              md={7}
              className="home-header"
              style={{ marginTop: "50px" }}
            >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello World!{" "}
              </h1>

              <h1 className="heading-name">
                I'm
                <TitleText className="main-name"> Ashutosh Rath</TitleText>
              </h1>
              <div style={{ paddingLeft: 50, textAlign: "left" }}>
                <h1>a,</h1>
                <Type />
              </div>
            </Col>

            <Col data-aos="fade-left" style={{ paddingBottom: 20 }}>
              <iframe
                alt="home pic"
                title="home"
                className="img-fluid"
                style={{ height: "440px", width: "440px", margin: "auto" }}
                src="https://embed.lottiefiles.com/animation/98636"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
