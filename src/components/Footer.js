import React from "react";

export default function Footer() {
  return (
    <footer className="footer-text-center">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="flex-center">
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
            </div>
            <a className="footerCloser">This website is built with ReactJS!</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
