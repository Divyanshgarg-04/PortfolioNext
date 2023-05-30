import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" className={props.isPhone} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.isGh && (<Button variant="primary" href={props.link_1} target="_blank"><BsGithub />&nbsp;{props.label_1}</Button>)}
        {"\n"}
        {"\n"}
        {props.second && (<Button variant="primary" href={props.link_2} target="_blank"><CgWebsite />{props.label_2}</Button>)}
        &nbsp;

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {/* {!props.isBlog && props.extraLink && (
          <Button
            variant="primary"
            href={props.extraLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Extra"}
          </Button>
        )} */}

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
