import React from "react";
import "./gamecardstyle.css";

function GameCard(props) {
  return (
    <div className="card">
      <img className='cardImage' alt={props.name} src={props.image} />
    </div>
  );
}

export default GameCard;
