import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
function AboutCard() {
  return (
    <Card className="quote-card-view">

      
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sarra Ben Messoaud </span>
            from <span className="purple">Tunisia.</span>
            <br />
            I'm a <span className="purple"> working student </span> pursuing a degree in Software Engineering
            <br />
            While
            <br />
            <br />
             Currently working at <span className="purple">Olindias</span>  as a <span className="purple">  Backend Developer </span> specializing in scalable  as a <span className="purple"> AI solutions </span> .
          </p>
       
          <ul>
            <li className="about-activity">
              <ImPointRight />  Marketing Leader of Northen American Engineering Club.
            </li>
            <li className="about-activity">
              <ImPointRight /> Active Member of Red Crescent.
            </li>
            <li className="about-activity">
              <ImPointRight /> Conducted a training session on Deep Learning fundamentals.
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
  
    </Card>
  );
}

export default AboutCard;


