import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import me2 from "../../Assets/me2.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import style from "./home.module.css"
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                I'M
                <strong className="main-name"> Sarra Ben Messaoud</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <div className={style["glowing-circle-wrapper"]}>
                <img
                  src={me2}
                  alt="home pic"
                  className={style["glowing-circle-image"]}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
