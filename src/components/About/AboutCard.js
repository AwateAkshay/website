import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akshay Awate </span>
            from <span className="purple"> Bangalore, India.</span>
            <br />
            Currently working as Jr. Devops Engineer(Remote) at{" "}
            <span className="purple"> Unitek.ai</span>, Ireland. 1+ years
            experience in software development, production infrastructure
            management and automation.
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Interested in learning
              new technologies and tools, contribute towards making systems more
              reliable and scalable, use/implement new tools to reduce toil.
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            " Availability is what takes you far in the game."{" "}
          </p>
          <footer className="blockquote-footer mt-0">Akshay</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
