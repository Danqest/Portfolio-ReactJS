import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import Image from "react-bootstrap/Image";
import { Card } from "react-bootstrap";
import { Spring } from "react-spring";
import { animated } from "react-spring";

export class Home extends Component {
  render() {
    return (
      <div>
        <div style={c1Style}>
          <h1 id="home">HOME</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            non quis exercitationem culpa nesciunt nihil aut nostrum explicabo
            reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
            Voluptatum ducimus voluptates voluptas?
          </p>
        </div>
      </div>
    );
  }
}

const c1Style = {
  height: "75vh",
  marginTop: "20vh",
};

export default Home;
