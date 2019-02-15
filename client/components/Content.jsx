import React from "react";
import Rules from './Rules';

const Content = props => {
  return (
    <div> 
      <h4 className="text-success">Game on !{props.title}</h4>
      <p>
      Play cards against humanity, because it is fun. But you is funnier ? You ? or the computer ?
      </p>
      <Rules/>
    </div>
  );
};



export default Content;