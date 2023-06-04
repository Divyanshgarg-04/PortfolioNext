import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsLink45Deg } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{ borderRadius: "20px", padding: "0px" }}
    >
      <Card.Title
        style={{
          margin: "auto",
          padding: "10px 0",
          backgroundColor: "var(--secondary)",
          width: "100%",
          borderRadius: "20px 20px 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "25px",
          fontStretch: "4px",
        }}
      >
        {props.title}
      </Card.Title>
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        className={props.isPhone}
        style={{
          border: "2px solid #fff",
          width: "90%",
          margin: "auto",
          marginTop: "4%",
        }}
      />
      <Card.Body>
        <Card.Text style={{ textAlign: "justify" }} className="">
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
