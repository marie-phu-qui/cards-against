import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Rules from './Rules';
import Game from './Game';

class Content extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      display: false
    }
    this.handleToggle = this.handleToggle.bind(this)
  }
  handleToggle(e) {
    e.preventDefault();
    console.log('Toggle the component !');
    console.log(this.state);
    return(
      this.setState({
        display: !this.state.display
      })
    )
  }
  render(){
  return (
    <Router>
      <div> 
        <h4 className="text-success">Game on !</h4>
        <p>
        Play cards against humanitys, because it is fun. But you is funnier ? You ? or the computer ?
        </p>

        <div id='game' className="text-success">
          <h4>
            <Link lassName="text-success" to="/game">Click to START</Link>
          </h4>
        </div>

        <div onClick={this.handleToggle}>
        <a id='rules' className="text-success" href='/'>See the rules</a>{this.state.display && <Rules />}
        </div>

        <Route exact path="/game" render={() => <Game />} />
      </div>
    </Router>

  );
  }
};



export default Content;