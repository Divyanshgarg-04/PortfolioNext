import React from "react";
import Card from "react-bootstrap/Card";
import { BsFillCaretRightFill } from "react-icons/bs";

function AboutCard() {
  return (
    <Card className="quote-card-view" data-aos="fade-right">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "Left" }}>
            Hola techies👋👋, I am Ashutosh Rath based in Odisha, India.
            <br />
            <br />
            Currently, I am an undergrad at National Institute of Technology,
            Rourkela .
            <br />
            What else I do when I am not touching😳 my laptop💻,
          </p>
          <ul>
            <li className="about-activity">
              <BsFillCaretRightFill /> Badminton🏸
            </li>
            <li className="about-activity">
              <BsFillCaretRightFill /> Binge watching series🎥
            </li>
            <li className="about-activity">
              <BsFillCaretRightFill /> Reading📑
            </li>
            <li className="about-activity">
              <BsFillCaretRightFill /> Exploring tech⚙️
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
