import React from "react";
import Card from "./Card.js";
import "./CardList.css";

export default function CardList(props) {
  // console.log("🌸", props, props.monsters);
  return (
    <div className="CardList">
      {props.monsters.map((mon) => (
        <Card mon={mon} key={mon.name} />
      ))}
    </div>
  );
}
