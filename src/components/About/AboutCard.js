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
            Hi Everyone, I am <span className="purple">Avni Agrawal </span>
            from <span className="purple"> Ahmedabad, India.</span>
            <br />I am pursuing Bachelors in Electrical Engineering from Sardar
            Vallabhbhai National Institute of Technology (NIT Surat)
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Sketching
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Watching Webseries
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Work to Build things for better Future and Livelyhood!"{" "}
          </p>
          <footer className="blockquote-footer mt-0">Avni</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
