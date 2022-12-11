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
        <div className="main-container" style={c1Style}>
          <h1>FEATURED PROJECTS</h1>
          <div className="wrap-desktop">
            <div className="wrap-desktop-item">
              <a
                href="https://github.com/Danqest/Reinforcement-Learning-Lunar-Lander"
                target="_blank"
              >
                <img
                  className="homeImg-desktop"
                  src="./assets/images/featured/v-lunarlander.png"
                />
                <div className="capBig">Deep Learning: Lunar Lander</div>
                <div className="capSmall">
                  Python, OpenAI Gym, Reinforcement Learning with
                  Stable-Baselines3, Tensorboard
                </div>
              </a>
            </div>
            <div className="wrap-desktop-item">
              <a
                href="https://github.com/Danqest/18-NoSQL-Social-Network-API"
                target="_blank"
              >
                <img
                  className="homeImg-desktop"
                  src="./assets/images/featured/v-nosql.png"
                />
                <div className="capBig">Social Network API</div>
                <div className="capSmall">
                  NoSQL, GET/POST/PUT/DELETE Routes, Mongoose, Insomnia,
                  Javascript
                </div>
              </a>
            </div>
            <div className="wrap-desktop-item">
              <a
                href="https://github.com/Danqest/12-SQL-Employee-Tracker"
                target="_blank"
              >
                <img
                  className="homeImg-desktop"
                  src="./assets/images/featured/v-mysql.png"
                />
                <div className="capBig">Employee Tracker</div>
                <div className="capSmall">
                  MySQL, Command Line, Node.js, Inquirer, Javascript
                </div>
              </a>
            </div>
            <div className="wrap-desktop-item">
              <a
                href="https://github.com/Danqest/06-Server-Side-APIs-Weather-Dashboard"
                target="_blank"
              >
                <img
                  className="homeImg-desktop"
                  src="./assets/images/featured/v-weatherdash.png"
                />
                <div className="capBig">Weather Dashboard</div>
                <div className="capSmall">
                  Server-Side APIs, Javascript, HTML, CSS
                </div>
              </a>
            </div>

            {/* <img className="homeImg-desktop" src="v-nosql.png" />
            <img className="homeImg-desktop" src="v-mysql.png" />
            <img className="homeImg-desktop" src="v-weatherdash.png" />
            <div className="capBig">Lunar Lander</div>
            <div className="capSmall">
              Python, OpenAI Gym, Reinforcement Learning via Stable-Baselines3,
              Tensorboard
            </div> */}
          </div>
          <div className="wrap-mobile">
            <a
              href="https://github.com/Danqest/Reinforcement-Learning-Lunar-Lander"
              target="_blank"
            >
              <img
                className="homeImg-mobile"
                src="./assets/images/featured/h-lunarlander.png"
              />
              <div className="capBig">Deep Learning: Lunar Lander</div>
              <div className="capSmall">
                Python, OpenAI Gym, Reinforcement Learning with
                Stable-Baselines3, Tensorboard
              </div>
            </a>
          </div>
          <div className="wrap-mobile">
            <a
              href="https://github.com/Danqest/18-NoSQL-Social-Network-API"
              target="_blank"
            >
              <img
                className="homeImg-mobile"
                src="./assets/images/featured/h-nosql.png"
              />
              <div className="capBig">Social Network API</div>
              <div className="capSmall">
                NoSQL, GET/POST/PUT/DELETE Routes, Mongoose, Insomnia,
                Javascript
              </div>
            </a>
          </div>
          <div className="wrap-mobile">
            <a
              href="https://github.com/Danqest/12-SQL-Employee-Tracker"
              target="_blank"
            >
              <img
                className="homeImg-mobile"
                src="./assets/images/featured/h-mysql.png"
              />
              <div className="capBig">Employee Tracker</div>
              <div className="capSmall">
                MySQL, Command Line, Node.js, Inquirer, Javascript
              </div>
            </a>
          </div>
          <div className="wrap-mobile">
            <a
              href="https://github.com/Danqest/06-Server-Side-APIs-Weather-Dashboard"
              target="_blank"
            >
              <img
                className="homeImg-mobile"
                src="./assets/images/featured/h-weatherdash.png"
              />
              <div className="capBig">Weather Dashboard</div>
              <div className="capSmall">
                Server-Side APIs, Javascript, HTML, CSS
              </div>
            </a>
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

export default Home;
