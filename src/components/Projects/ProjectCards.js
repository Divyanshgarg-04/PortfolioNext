import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsLink45Deg } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Title
        style={{
          margin: "auto",
          paddingBottom: "10px",
          backgroundColor: "var(--text-primary)",
        }}
      >
        {props.title}
      </Card.Title>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className={props.isPhone}
        style={{ border: "2px solid #fff" }}
      />
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.isGh && (
          <Button variant="primary" href={props.link_1} target="_blank">
            <BsLink45Deg />
            &nbsp;{props.label_1}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {props.second && (
          <Button variant="primary" href={props.link_2} target="_blank">
            <CgWebsite />
            {props.label_2}
          </Button>
        )}
        &nbsp;
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
