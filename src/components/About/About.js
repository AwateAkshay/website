import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

import aws from "../../Assets/About/aws.svg";
import docker from "../../Assets/About/docker.svg";
import elasticSearch from "../../Assets/About/elasticSearch.svg";
import go from "../../Assets/About/go.svg";
import grafana from "../../Assets/About/grafana.svg";
import kibana from "../../Assets/About/kibana.svg";
import kubernetes from "../../Assets/About/kubernetes.svg";
import logStash from "../../Assets/About/logStash.svg";
import nginx from "../../Assets/About/nginx.svg";
import prometheus from "../../Assets/About/prometheus.svg";
import python from "../../Assets/About/python.svg";
import splunk from "../../Assets/About/splunk.svg";
import terraform from "../../Assets/About/terraform.svg";

import mac from "../../Assets/About/tools/mac.svg";
import ubuntu from "../../Assets/About/tools/ubuntu";
import postman from "../../Assets/About/tools/postman";
import vscode from "../../Assets/About/tools/vscode.svg";

const LIST = [
  aws,
  docker,
  elasticSearch,
  go,
  grafana,
  kibana,
  kubernetes,
  logStash,
  nginx,
  prometheus,
  python,
  splunk,
  terraform,
];

const TOOLS = [mac, ubuntu, postman, vscode];

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'm</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {LIST.map((item) => (
            <Techstack iconName={item} />
          ))}
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {TOOLS.map((item) => (
            <Techstack iconName={item} />
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default About;
