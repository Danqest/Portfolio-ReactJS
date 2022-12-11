import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavBar({ currentPage, handlePageChange }) {
  return (
    <div>
      <div className="responsive-bar">
        <div className="menu">
          <h4>Menu</h4>
        </div>
      </div>
      <nav>
        <ul className="ani-menu">
          <li className="nav-item">
            <a
              href="#home"
              // onClick={() =>
              //   window.scrollTo("top: 0", "left: 0", "behvaior: 'smooth'")
              // }
              onClick={() => handlePageChange("Home")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Home" ? "nav-link-active" : "nav-link"
              }
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "About" ? "nav-link-active" : "nav-link"
              }
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              // Check to see if the currentPage is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Portfolio" ? "nav-link-active" : "nav-link"
              }
            >
              Portfolio
            </a>
          </li>
          {/* commented out the Contact page for future development of an email server */}
          {/* <li className="nav-item">
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Contact" ? "nav-link-active" : "nav-link"
              }
            >
              Contact
            </a>
          </li> */}
          <li className="nav-item">
            <a
              // href="#resume"
              href="./assets/documents/2022-resume-cbrooks.pdf"
              download="resume-cbrooks"
              target="_blank"
              // onClick={() => handlePageChange("Resume")}
              // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "Resume" ? "nav-link-active" : "nav-link"
              }
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
