import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css';
import certf1 from "../Assets/Nlp transformer-Nividia Certification.pdf"
import certf2 from "../Assets/Predictive maintenace-Nividia Certification.pdf"
import nividia from "../Assets/nividia.png"
const certificates = [
    { link:certf1,
      imgPath:nividia,
      title: 'NLP Transformer',
      description: 'Issued by Nividia Deep Learning Institute'
    },
    { link:certf2,
      imgPath:nividia,
      title: 'Predictive Maintenance',
      description: 'Issued by Nividia Deep Learning Institute'
    }
  ];
  
function CertificateCards(props) {
  return (
    <Card className="certificate-card-view" onClick={() => window.open(props.link, "_blank")} style={{ cursor: "pointer" }}>
      <Card.Img variant="top" src={props.imgPath} alt="certificate-img"  />
      <Card.Body>
        <Card.Title className="certificate-title">{props.title}</Card.Title>
        <Card.Text className="certificate-text">
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default function CertificateGallery() {
  return (
    <Container className="certificate-gallery">
      <h2 className="section-heading">My Certificates</h2>
      <Row>
        {certificates.map((certificate, index) => (
          <Col md={4} className="certificate-column" key={index}>
            <CertificateCards 
              imgPath={certificate.imgPath}
              title={certificate.title}
              description={certificate.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
