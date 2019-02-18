import React from "react";

import Rules from './Rules';
import Game from './Game';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayRules: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle(e) {
    e.preventDefault();
    console.log('Toggle the component !');
    console.log(this.state);
    return(
      this.setState({
        displayRules: !this.state.displayRules
      })
    )
  }
  render(){
  return (
    <div>
      <div> 
        <h4 className="text-success">Game on !</h4>
        <p>
        Play cards against humanitys, because it is fun. But you is funnier ? You ? or the computer ?
        </p>

        <div id='game' className="text-success">
          <h4>
          <a href='/game'>Enter the game</a>
          </h4>
        </div>

        <div onClick={this.handleToggle}>
        <a id='rules' className="text-success" href='/'>See the rules</a>{this.state.displayRules && <Rules />}
        </div>

        
      </div>
    </div>

  );
  }
};



export default Content;