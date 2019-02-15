import React from "react";
import Card from "./Card";

const Game = props => {
  return (
    <div className="container-game">
      <div id='game'>
        <h4 className="text-success">PLAY will happen here</h4>
        <Card/>
      </div>
    </div>
  );
};

export default Game;