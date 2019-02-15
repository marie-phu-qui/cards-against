import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Rules from './Rules';
import Game from './Game';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    e.preventDefault();
    console.log('Display the clicked component !');
    console.log(this.state);
    return(
      this.setState({
        display: {
          'rules' : true,
        }
      })
    )
  }
  render(){
  return (
    <Router>
      <div> 
        <h4 className="text-success">Game on !</h4>
        <p>
        Play cards against humanity, because it is fun. But you is funnier ? You ? or the computer ?
        </p>

        <div id='game' className="text-success">
          <h4>
            <Link to="/game">Click to START</Link>
          </h4>
        </div>

        <div onClick={this.handleClick}>
        <a id='rules' className="text-success" href='/'>See the rules</a>{this.state.display.rules == true && <Rules />}
        </div>

        <Route exact path="/game" render={() => <Game />} />
      </div>
    </Router>

  );
  }
};



export default Content;