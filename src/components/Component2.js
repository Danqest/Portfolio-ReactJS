import React, { Component } from "react";
import { Spring } from "react-spring";
import { useSpring, animated } from "react-spring";

export class Component2 extends Component {
  render() {
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ duration: 300 }}
        delay={9600}
      >
        {(props) => (
          <animated.div style={props}>
            <div style={c1Style}>
              <h1>Component 2</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eligendi non quis exercitationem culpa nesciunt nihil aut
                nostrum explicabo reprehenderit optio amet ab temporibus
                asperiores quasi cupiditate. Voluptatum ducimus voluptates
                voluptas?
              </p>
            </div>
          </animated.div>
        )}
      </Spring>
    );
  }
}

const c1Style = {
  background: "darkblue",
  color: "white",
  padding: "1.5rem",
};

export default Component2;
