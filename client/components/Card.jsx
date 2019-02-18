import React from "react";

const Card = props => {
  return (
    <div className="container-game">
      <div id='card'>
        <p>
            {props.card} / card content /
        </p>
      </div>
    </div>
  );
};

export default Card;