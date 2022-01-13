import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/Akshay_Resume.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume justify-content-center">
          <Col sm={12} md={12} lg={9} xl={9} xxl={8} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Unitek.ai"
              role="Jr.Devops Engineer "
              date="July 2021 - present"
              content={[
                "* Set up EKS Infrastructure with Github Actions and terraform on AWS for different environments.",
                "Wrote Github Actions pipelines for multiple environments for deploying applications on EKS clusters.",
                "Created and deployed kubernetes applications with helm using Github Actions on different environments.",
                "Worked on kube-prometheus-stack helm chart for configuring prometheus, grafana and alertmanager for different clusters.",
                "Worked on various metrics to get insights on systems and application performance including monitoring, logging, alerting using prometheus and grafana.",
                "Created multiple grafana dashboards using different datasources prometheus, cloudwatch to monitor various resources from kubernetes and AWS.",
                "Worked on multiple kubernetes objects creating deployments and mapping services with nginx on AWS Application Load Balancer.",
                "Deployed kubecost helm chart which helped to reduce kubernetes cost allocation on various resources",
              ]}
            />
            <Resumecontent
              title="Thinkingstack.ai"
              role="Devops Intern"
              date="Sept. 2020 to Jan. 2021"
              content={[
                "* Worked with terraform to automate the AWS EKS infrastructure.",
                "Worked on ambassador for mapping various services in kubernetes",
                "Worked on creating pods, replica sets, services, deployments, labels, health checks and ingress by writing Yaml files.",
                "Maintaining multiple kubernetes clusters involved in deploying various resources. Involved in researching and implementing POC's using OSS kubernetes tools.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="DOTSLASH 4.0"
              content={[
                "Worked on creating the a firefox extension for differently abled people. Reached upto Top8 teams from 1000s of registration",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}></Row>
      </Container>
    </Container>
  );
}

export default Resume;
