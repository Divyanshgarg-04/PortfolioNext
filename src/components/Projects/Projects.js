import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import Particle from "../Particle";
import styled from "styled-components";
import tw from "twin.macro";
const Underline = styled.div`
  ${tw`
    h-[4px]
    bg-white
    rounded-lg
    mb-4
    lg:mb-12
`}
  width: ${(props) => `${props.width}px`};
  @media (max-width: 640px) {
    width: ${(props) => `calc(${props.width}px - 100px)`};
  }
`;
const CenteredRow = styled(Row)`
  ${tw`
    justify-center
  `}
`;
function Projects() {
  return (
    <Container fluid className="project-section">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <Underline width={250} />
        <p style={{ color: "white" }}>Here are a few of my projects</p>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}> */}
        <CenteredRow>
          <Col md={8} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dhnkuonev/image/upload/v1678885907/Screenshot_2023-03-15_183958_tang0j.png"
              isGh={true}
              second={false}
              isPhone=""
              title="NES"
              label_1="Demo"
              description="National Entrepreneurship Summit organised by E-cell club of NIT Rourkela, is one the largest summit among the entrepreneurship cells of colleges. I had developed the website alongside another colleague of mine. NextJS, ReactJS, Tailwind Css were used to create the website."
              link_1="https://nes2023.live/"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dhnkuonev/image/upload/v1678885949/Screenshot_2023-03-15_184205_sjmj4f.png"
              isBlog={false}
              isGh={true}
              label_1="Demo"
              title="HackNITR"
              description="Contributed to the largest student run hackathon in middle Asia, HackNITR which had 5000+ registration. Thech stacks used were ReactJS, Tailwind CSS, babel."
              link_1="https://www.hacknitr.com/"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              imgPath="https://res.cloudinary.com/dhnkuonev/image/upload/v1678886078/Screenshot_2023-03-15_184403_p7kynb.png"
              isGh={true}
              isBlog={false}
              title="Github Profile generator"
              label_1="Demo"
              description="Used API to fetch list of github users according to the username searched. List of all the users who have the search text in it will be displayed on the screen. ReactJS, TailwindCSS is used."
              link_1="https://github-search-username.vercel.app/"
            />
          </Col>

          <Col md={8} className="project-card">
            <ProjectCard
              isGh={true}
              label_1="Demo"
              imgPath="https://res.cloudinary.com/dhnkuonev/image/upload/v1678886218/Screenshot_2023-03-15_184624_xnmkuv.png"
              isBlog={false}
              title="Profile Card"
              description="Made a profile card using ReactJS which acts as an alternative to LinkTree. It contains all the links that defines me."
              link_1="https://knowvasu.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={empty}
              isBlog={false}
              title=""
              description=""
              // link_1=""
              // link_2=""
            />
          </Col> */}
        </CenteredRow>
        {/* </Row> */}
      </Container>
    </Container>
  );
}

export default Projects;
