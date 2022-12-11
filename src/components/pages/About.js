import React, { Component } from "react";
import Container from "react-bootstrap/Container";

import Image from "react-bootstrap/Image";
import { Card } from "react-bootstrap";
import { Spring } from "react-spring";
import { animated } from "react-spring";

export class About extends Component {
  render() {
    return (
      <div>
        <div style={c1Style}>
          <h1 id="about">ABOUT ME</h1>
          <div className="about-me-content-wrapper">
            <img
              className="pfp-img"
              src="./assets/images/about/pfp-about-me.jpg"
            />
            <div className="about-me-text-wrapper">
              <p>
                I'm Colin Brooks, a full-stack web developer, Python programmer,
                and artificial intelligence enthusiast. My technological journey
                began shortly after university where I worked as a quantitative
                financial analyst in a small investment firm, gaining
                professional exposure to database management, data analytics,
                and the software technologies driving the firm's success. More
                formally, I'm also a recent graduate of the Georgia Institute of
                Technology's Full-Stack Web Development program.
              </p>
              <p>
                Over the years since then, I've become engrossed in machine &
                deep learning, scripting, and programming. Personal projects
                have included web development (like this website!), creating
                web-scrapers, and developing AI powered photo classifiers, NLP
                modules, & investment tools. I am also a co-founder and owner of
                a startup technology & data company located in Melbourne, FL.
              </p>
              <p>
                Outside of work, my passions include photography, physical
                fitness, and stock trading. I also enjoy a cappaccino or good
                scotch every now and then - looking at you Balvenie.
              </p>
              <p>
                To get in contact, feel free to reach out to{" "}
                <a href="mailto:mcbrooks@pm.me">mcbrooks@pm.me</a>!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const c1Style = {
  height: "75vh",
  marginTop: "20vh",
};

export default About;
