import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-center"
      style={{ position: "relative", "margin-top": "180px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="flex-center">
              <a
                href="https://www.linkedin.com/in/mcbrooks6783"
                target="_blank"
              >
                LinkedIn
              </a>
              <a> • </a>
              <a href="https://www.github.com/Danqest" target="_blank">
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
