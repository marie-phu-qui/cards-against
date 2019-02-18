import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";

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