import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{height:"400px"}}/>
      <Card.Body className="card-body-custom">
        <Card.Title className="card-title-custom">{props.title}</Card.Title>
        <Card.Text className="card-text-custom">
          {props.description}
        </Card.Text>
        <div className="button-container">
          {props.isBlog ? (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp; {"GitHub"}
            </Button>
          ) : (
            <Button variant="primary">
         {props.title === "Recolyse" ? (
    <a href="https://recolyse.com" target="_blank" rel="noopener noreferrer" style={{textDecoration: "none"}}>
      <CgWebsite /> &nbsp; Check Live
    </a>
  ) : (
    <>
      <CgWebsite /> &nbsp; Private Company Code
    </>
  )}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
