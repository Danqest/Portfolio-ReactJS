import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <a
          className="footerLink"
          href="https://www.linkedin.com/in/mcbrooks6783"
          target="_blank"
        >
          LinkedIn
        </a>
        <a> • </a>
        <a
          className="footerLink"
          href="https://www.github.com/Danqest"
          target="_blank"
        >
          Github
        </a>
        <a className="footer-closer">This website is built with ReactJS!</a>
      </div>
    </footer>
  );
}
