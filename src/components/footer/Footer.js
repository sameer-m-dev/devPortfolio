import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer() {
  return (
    <div className="footer-div" style={{ textAlignLast: "center" }}>
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
        <img
          src="https://counter11.stat.ovh/private/freecounterstat.php?c=muamtzgzz2nt7p32frrhsb5mwgyc8wes"
          border="0"
          title="Page Hits"
          alt="Page Hits"
        />
      </Fade>
    </div>
  );
}
