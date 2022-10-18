import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Card } from "react-bootstrap";
import { Spring } from "react-spring";
import { animated } from "react-spring";

export class Component1 extends Component {
  render() {
    return (
      <div>
        <div style={c1Style}>
          <h1>ABOUT</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </p>
        </div>
        <Container>
          <Row>
            <Col>
              1 of 2 <Image></Image>
            </Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const c1Style = {
  // background: "steelblue",
  color: "white",
  padding: "1.5rem",
  borderTop: "2px solid white",
  borerBottom: "2px dotted white",
};

export default Component1;
