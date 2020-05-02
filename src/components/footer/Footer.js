import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer() {
  return (
    <div className="footer-div" style={{ textAlignLast: "center" }}>
      <Fade>
        <img
          className="footer-text"
          src="https://hitwebcounter.com/counter/counter.php?page=7286883&style=0006&nbdigits=5&type=page&initCount=0"
          title="Page Hits"
          Alt="PHP Hits Count"
          border="0"
        />
        <p className="footer-text">
          Made by{" "}
          <a
            href="https://github.com/sameer-m-dev/"
            style={{ textDecoration: "underline", color: "#868e96" }}
          >
            Sameer Dev
          </a>{" "}
          &lt;/&gt;{" "}
        </p>
      </Fade>
    </div>
  );
}
