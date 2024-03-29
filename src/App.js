import React, { Component } from "react";
import fruits from "./fruits.json"
import FruitCard from "./components/FruitCard/index"
import Title from "./components/Title/index"
import Wrapper from "./components/Wrapper/index"

class App extends Component {

  state = {
    fruits,
    currentScore: 0,
    topScore: 0
  };

  shuffleCards = () => {
    for (let i = this.state.fruits.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = this.state.fruits[i]
      console.log(temp)
      fruits[i] = fruits[j]
      fruits[j] = temp
      console.log(temp)
      this.setState({ fruits: fruits })
    }
  }

  cardClick = (id) => {
    console.log("clicked a fruit!")

    let j = 0
    let temp
    let tempFruits = this.state.fruits

    for (let i = this.state.fruits.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1))
      temp = tempFruits[i]
      console.log(temp)
      tempFruits[i] = tempFruits[j]
      tempFruits[j] = temp
      console.log(temp)
      this.setState({ fruits: fruits })
    }

    let won = true;

    let newScore = this.state.currentScore;
    const clickedID = parseInt(id);

    const newImageArr = this.state.fruits.map(item => {
      if (item.id === clickedID) {
        if (item.clicked === true) {
          won = false
        }
        else {
          item.clicked = true;
          newScore = this.state.currentScore + 1;
        }
      }
      return item;
    });

    if (won === true && newScore === 12) {
      alert("YOU WON!")

      this.setState({
        currentScore: 0,
        topScore: 12,
        fruits: newImageArr
      })

    } else if (won === true) {
      this.setState({
        fruits: newImageArr,
        currentScore: newScore
      }, () => {
        console.log('current score: ', this.state.currentScore)
      })
    } else {
      alert("YOU FAILED")
      const newGameArr = this.state.fruits.map(item => {
        item.clicked = false
        return item
      })

      var newTopScore = this.state.topScore

      if (this.state.currentScore > this.state.topScore) {
        newTopScore = this.state.currentScore
      };

      this.setState({
        currentScore: 0,
        topScore: newTopScore,
        fruits: newGameArr
      });
    };
    console.log("clicked id: ", id)
  };

  render() {
    return (

      <div>
        <Title
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}
        />

        <Wrapper>
          {this.state.fruits.map((fruit) => (
            <FruitCard key={fruit.id}
              name={fruit.name}
              image={fruit.image}
              id={fruit.id}
              cardClick={this.cardClick}
            />
          ))}
        </Wrapper>
      </div>
    )
  };
};

export default App;
