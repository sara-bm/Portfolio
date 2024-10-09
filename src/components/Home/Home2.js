import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import myImg2 from "../../Assets/Group 2.png"
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I'm Sarra, a dedicated and enthusiastic software engineering student    
            <br />
            <br /> I don't just writing code— I'm basically a juggler. But instead of balls, I juggle  <b className="purple"> Python script, APIs,  </b>
             and <b className="purple">debugging code</b>  that looks like it was written by a sleep-deprived raccoon. 😅🤷‍♂️
              <br />
              <br />I  believe in <i>
                <b className="purple"> Learning by Doing,</b>
              </i> so I always seek out side jobs and freelance opportunities to apply my skills in real-world scenarios.
              <br />
              {/* <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i> */}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg2} className="img-fluid" alt="avatar" style={{width:"500px", height:"500px"}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sara-bm"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/sarra-ben-messaoud/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
