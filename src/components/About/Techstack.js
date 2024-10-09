import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPostgresql,

} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiPytorch,
  SiElasticsearch,
  SiMysql,
  SiPostgresql
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import lang from "../../Assets/lang.png"
import nginx from "../../Assets/Pi7_nginx.png"
import pinecone from "../../Assets/pinecone.png"

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={lang} alt="langchain" style={{width:"82px", height:"72px"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiElasticsearch/>

      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={nginx} alt="langchain" style={{width:"82px", height:"72px"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={pinecone} alt="langchain" style={{width:"92px", height:"72px"}} />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
