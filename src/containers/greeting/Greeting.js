import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <h2 className="greeting-nickname">( {greeting.nickname} )</h2>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="Sameer sitting on table"
              src={require("../../assests/images/feelingProud.svg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
