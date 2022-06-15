import React from "react";
import star from "./images/Star.png";

export default function Card(props) {
      let badgeText;
      if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT";
      } else if (props.item.location === "Online") {
        badgeText = "ONLINE";
      }
    
  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={props.item.coverImg} className="card--image" alt="Card" />
      <div className="card--stats">
        <img src={star} className="card--star" alt="Star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray">({props.item.stats.reviewCount}) • </span>
        <span className="gray">{props.item.location}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
