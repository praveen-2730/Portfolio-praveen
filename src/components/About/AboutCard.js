import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className="purple"> MEDANKALA PRAVEEN KUMAR</span>
            from <span className="purple"> Polavaram, India.</span>
            <br />
            I am currently searching for a job as a Software Developer.
            <br />
            I have completed Bachelor of Technology(ECE) 
            from Vishnu Institute of Technology,Bhimavaram.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">PRAVEEN</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
