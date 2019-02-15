import React from "react";
import Rules from './Rules';
import Game from './Game';

const Content = props => {
  return (
    <div> 
      <h4 className="text-success">Game on !</h4>
      <p>
      Play cards against humanity, because it is fun. But you is funnier ? You ? or the computer ?
      </p>
      <Game/>
      <Rules/>
    </div>
  );
};



export default Content;