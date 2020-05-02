import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer() {
  return (
    <div className="footer-div">
      <Fade>
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
