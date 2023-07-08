import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view" data-aos="fade-right">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "Left" }}>
            Hey there! I'm <span className="purple">Ashutosh Rath</span>, a
            curious and enthusiastic undergrad at NIT Rourkela. I've got a
            serious tech obsession—I can't resist diving into the ever-evolving
            world of technology!
            <br /> When I'm not buried in books or coding, you'll find me
            unleashing my creative side through writing. Sharing my thoughts
            with the tech community is like connecting with a tribe of fellow
            enthusiasts. And let's not forget the importance of balance!
            <br />
            You'll catch me on the sports field or hanging out with friends,
            because hey, life's not just about pixels and code. Join me on this
            exciting tech journey, and let's make some magic happen!
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
