import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Spring } from "react-spring";
import { animated } from "react-spring";

export class Component2 extends Component {
  render() {
    return (
      <div>
        {/* <Card border="light" style={{ width: "18rem" }}>
          <Card.Body> */}
        <div style={c2Style}>
          <h1>PROJECTS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </p>
        </div>
        {/* </Card.Body>
        </Card> */}
      </div>
    );
  }
}

const c2Style = {
  // background: "steelblue",
  color: "white",
  padding: "1.5rem",
  borderTop: "2px solid white",
  borerBottom: "2px dotted white",
};

export default Component2;
