import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Spring } from "react-spring";
import { animated } from "react-spring";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export class Projects extends Component {
  render() {
    return (
      <div>
        {/* <Card border="light" style={{ width: "18rem" }}>
          <Card.Body> */}
        <div style={c2Style}>
          <h1 id="projects">PROJECT PORTFOLIO</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </p>
          <Container>
            <Row>
              <Col>
                1 of 2 <Image></Image>
              </Col>
              <Col>2 of 2</Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

const c2Style = {
  height: "75vh",
  marginTop: "20vh",
};

export default Projects;
