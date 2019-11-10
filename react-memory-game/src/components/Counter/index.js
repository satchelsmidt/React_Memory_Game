import React from "react";
// import FruitCard from 'react';

// By extending the React.Component class, Counter inherits functionality from it
class Counter extends React.Component {
  // constructor(props){
  //   // this.handleIncrement = React.createRef();
  // }
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    topScore: 0 
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({score: this.state.score + 1})
  };

  // handleDecrement decreases this.state.count by 1
  resetScore = () => {
    if(this.state.score > this.state.topScore){
      this.setState({topScore: this.state.score})
    }

    this.setState({ score: 0});
  };

  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div className="jumbotron">
        <div className="display">
          LEADERBOARD: 
        </div>
        <div className="display">
          <p className="lead">Score: {this.state.score}</p>
          <p className="lead">Top Score: {this.state.topScore}</p>
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            Increase Score
          </button>{" "}
          <button className="btn btn-danger" onClick={this.resetScore}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
