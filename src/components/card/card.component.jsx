import React from "react";
import "./card.style.css";

export const Card = (props) => (
  <div className="cardContainer">
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2`}
      alt={`monster-${props.monster.id}`}
    />
    <h3>{props.monster.name}</h3>
    <p>{props.monster.email}</p>
  </div>
);
