import React from "react";
import { Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Techstack(prop) {
  return (
    <div className="w-auto">
      <Col xs={4} md={2} className="tech-icons">
        <img
          src={`${prop.iconName}`}
          alt={`${prop.iconName}`}
          className="tech-icon-images"
        />
        {/* <i className={`${prop.iconName} tech-icon-images`}></i> */}
      </Col>
    </div>
  );
}

export default Techstack;
