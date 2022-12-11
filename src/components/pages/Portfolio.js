import React, { Component } from "react";
import { Card } from "react-bootstrap";
import { Spring } from "react-spring";
import { animated } from "react-spring";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export class Portfolio extends Component {
  render() {
    return (
      <div>
        {/* <Card border="light" style={{ width: "18rem" }}>
          <Card.Body> */}
        <div style={c2Style}>
          <h1 id="projects">PORTFOLIO</h1>
          <div className="portfolio-container">
            <a
              href="https://github.com/Danqest/portfolio-reactjs"
              target="_blank"
            >
              <div className="card-container">
                <div className="portfolio-cap-small">React.js, CSS</div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/react-portfolio.png"
                />
                <h4>
                  <b>Portfolio Website</b>
                </h4>
              </div>
            </a>
            <a
              href="https://github.com/Danqest/Reinforcement-Learning-Lunar-Lander"
              target="_blank"
            >
              <div className="card-container">
                <div className="portfolio-cap-small">
                  Python, OpenAI Gym, Reinforcement Learning with
                  Stable-Baselines3, Tensorboard
                </div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/lunar-lander.png"
                />

                <h4>
                  <b>Deep Learning: Lunar Lander</b>
                </h4>
              </div>
            </a>
            <a
              href="https://github.com/Danqest/18-NoSQL-Social-Network-API"
              target="_blank"
            >
              <div className="card-container">
                <div className="portfolio-cap-small">
                  NoSQL, GET/POST/PUT/DELETE Routes, Mongoose, Insomnia,
                  Javascript
                </div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/nosql.png"
                />
                <h4>
                  <b>Social Network API</b>
                </h4>
              </div>
            </a>
            <a
              href="https://github.com/Danqest/12-SQL-Employee-Tracker"
              target="_blank"
            >
              <div className="card-container">
                <div className="portfolio-cap-small">
                  MySQL, Command Line, Node.js, Inquirer, Javascript
                </div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/mysql.png"
                />
                <h4>
                  <b>Employee Tracker</b>
                </h4>
              </div>
            </a>

            <a
              href="https://github.com/Danqest/06-Server-Side-APIs-Weather-Dashboard"
              target="_blank"
            >
              <div className="card-container">
                <div className="portfolio-cap-small">
                  Server-Side API, HTML, CSS, Javascript
                </div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/weather-dash.png"
                />
                <h4>
                  <b>Weather Dashboard</b>
                </h4>
              </div>
            </a>
            <a
              href="https://github.com/Danqest/03-Javascript-Password-Generator"
              target="_blank"
            >
              <div className="card-container">
                <div className="portfolio-cap-small">Javascript, HTML, CSS</div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/password-generator.png"
                />
                <h4>
                  <b>Password Generator</b>
                </h4>
              </div>
            </a>
            <a
              href="https://github.com/Danqest/10-OOP-Team-Profile-Generator"
              target="_blank"
            >
              <div className="card-container">
                <div className="portfolio-cap-small">
                  Object Oriented Programming, Javascript, HTML
                </div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/team-profile.png"
                />
                <h4>
                  <b>Team Profile Generator</b>
                </h4>
              </div>
            </a>
            <a
              href="https://github.com/Danqest/13-Object-Relational-Mapping-ORM-E-Commerce-Back-End"
              target="_blank"
            >
              <div className="card-container">
                <div className="portfolio-cap-small">
                  Object Relational Mapping, Express.js, Sequelize, MySQL,
                  Insomnia
                </div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/e-commerce.png"
                />
                <h4>
                  <b>E-Commerce Back End</b>
                </h4>
              </div>
            </a>
            <a href="https://github.com/Danqest/11-Note-Taker" target="_blank">
              <div className="card-container">
                <div className="portfolio-cap-small">Express.js, Heroku</div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/note-taker.png"
                />
                <h4>
                  <b>Note Taker</b>
                </h4>
              </div>
            </a>
            <a
              href="https://github.com/Danqest/09-Professional-README-Generator"
              target="_blank"
            >
              <div className="card-container">
                <div className="portfolio-cap-small">
                  Inquirer, FS, Command Line, Javascript
                </div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/readme-generator.png"
                />
                <h4>
                  <b>README Generator</b>
                </h4>
              </div>
            </a>
            <a
              href="https://github.com/Danqest/05-Third-Party-APIs-Work-Day-Scheduler"
              target="_blank"
            >
              <div className="card-container">
                <div className="portfolio-cap-small">
                  Third-Party APIs, Javascript, HTML
                </div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/work-day-scheduler.png"
                />
                <h4>
                  <b>Work Day Scheduler</b>
                </h4>
              </div>
            </a>
            <a href="https://github.com/Danqest/04-Web-APIs" target="_blank">
              <div className="card-container">
                <div className="portfolio-cap-small">
                  Web APIs, Javascript, HTML, CSS
                </div>
                <img
                  className="card-img"
                  src="./assets/images/portfolio/quiz-game.png"
                />
                <h4>
                  <b>Finance Quiz Game</b>
                </h4>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const c2Style = {
  height: "75vh",
  marginTop: "20vh",
  // marginBottom: "20vh",
};

export default Portfolio;
