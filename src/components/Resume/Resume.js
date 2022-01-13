import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/resume.pdf";

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
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="JUNIOR DEVELOPER"
              date="August 2020 - present"
              content={["Developers Student Club, SVNIT"]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="DOTSLASH 4.0"
              content={[
                "Worked on creating the a firefox extension for differently abled people. Reached upto Top8 teams from 1000s of registration",
              ]}
            />
            <Resumecontent
              title="Restaurant Website"
              content={[
                "https://giriraj-restaurant.netlify.app/",
                "Under Construction",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>

            <Resumecontent
              title="12TH BOARD [Nelsons School,Gujarat]"
              date="2017 - 2019"
              content={["Precentage: 76%, GSHEB Board"]}
            />
            <Resumecontent
              title="10TH BOARD [Nelsons School,Gujarat] "
              date="2015 - 2017"
              content={["Precentage: 84%, GSEB Board"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title="JEE"
              date="2019"
              content={[
                "Precentile: 98.03",
                "Qualified into one of the topmost Engineering colleges of India (SVNIT - Rank 54 (NIRF RANK 2020)",
              ]}
            />
            <Resumecontent
              title="UCMAS"
              date=""
              content={[
                "Successfully completed Mental Maths Course securing FIRST RUNNER UP position at final Level",
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
