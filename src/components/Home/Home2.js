import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets//WhatsApp Image 2021-02-01 at 21.00.35.jpeg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purples"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
             <br />
              <br />I am having my command on
              <i>
                <b className="purples"> Javascript, React, Node.JS, Git, MongoDB, ExpressJS </b>
              </i>
             <br />
              <br />I also have a bit knowledgeof
              <i>
                <b className="purples"> C++, Python, C </b>
              </i>
              <br />
              <br />
              My current focus is on;
              <i>
                <b className="purples">
                  Web Development
                </b>
              </i>
              <br />
              <br />
              I apply my passion for developing products
              with
              <i>
                <b className="purples"> Modern Javascript Frameworks</b>
              </i>
                &nbsp; like
              <i>
                <b className="purples"> Node.js and React.js</b>
              </i>
              <b> and also sometimes do </b>
              <b className="purples">Competitive coding</b>
              <br />
              <br />
              <i>
               <b>Always eager to learn new things.<br /> I am also exploring the field of <i className="purples"> App Development.</i><br /> I have a bit knowledge of </b>
               <b className="purples">Machine Learning as well</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">

            <p>
              Feel free to <span className="purples">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Avni1802"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/AvniAgrawal12"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/avni-agrawal1802/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_avni.18_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
