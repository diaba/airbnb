import React from "react";
import hero from "./Group.png"; //

import img1 from "./image1.png";
import star from "./Star.png";
import img2 from "./mountain.png";
import img3 from "./wedding.png";

export default function Hero() {
  return (
    <section className="hero">
      <img src={hero} alt="Hero" className="hero-img"></img>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
      <div className="experience">
        <div className="experience-one">
          <div className="experience-img">
            <img src={img2} alt="exp1"></img>
          </div>
          <p className="experience-star">
            <span>
              <img src={star} alt="star"></img>4.8 (2) . USA{" "}
            </span>
          </p>
          <p>Group mountain biking</p>
          <p>
            <strong>From $50 / </strong>person
          </p>
        </div>
        <div className="experience-one">
          <div className="experience-img">
            <img src={img3} alt="exp2"></img>
          </div>
          <p className="experience-star">
            <span>
              <img src={star} alt="star"></img>5.0(30) . USA{" "}
            </span>
          </p>
          <p>Learn wedding photography</p>
          <p>
            <strong>From $126 / </strong>person
          </p>
        </div>
        <div className="experience-one">
          <div className="experience-img">
            <img src={img1} alt="exp1"></img>
          </div>
          <p className="experience-star">
            <span>
              <img src={star} alt="star"></img>5.0(6) . USA{" "}
            </span>
          </p>
          <p>Life lessons with Katie Zaferes</p>
          <p>
            <strong>From $136 / </strong>person
          </p>
        </div>
      </div>
    </section>
  );
}
