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
    { 
      imgPath:nividia,
      title: 'Predictive Maintenance',
      description: 'Issued by Nividia Deep Learning Institute',
      link:certf2,
    }
  ];
  
function CertificateCards(props) {
  const openPdf = (pdfLink) => {
    console.log(process.env.REACT_APP_URL)
    // const link=`${process.env.REACT_APP_URL}${pdfLink}` 
    const link=`https://sarraportfolio.vercel.app/${pdfLink}`
    window.open(link, "_blank");
  };
  console.log(props)
  return (
    <Card className="certificate-card-view" onClick={()=>openPdf(props.link)} style={{ cursor: "pointer" }}>
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
              link={certificate.link}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
