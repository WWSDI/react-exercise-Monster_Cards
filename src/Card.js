import React from "react";
import "./Card.css";

export default function Card({ mon }) {
  return (
    <div className="Card">
      <h1>{mon.name}</h1>
      <img src={mon.img} alt={mon.name}></img>
      <p>{mon.description.substr(0,100)+'...'}</p>
      <button>buy now</button>
    </div>
  );
}
