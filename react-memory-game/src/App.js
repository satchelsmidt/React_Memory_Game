import React, { Component } from "react";
import fruits from "./fruits.json"
import FruitCard from "./components/FruitCard/index"
import Title from "./components/Title/index"
import Wrapper from "./components/Wrapper/index"

class App extends Component {

  state = {
    fruits,
    // score
  };

  cardClick = id => {
    console.log("hah, bitch!")
  }

  render() {
    return (

      <Wrapper>
        <Title> Fruit time </Title>
        {this.state.fruits.map(fruit => (
          <FruitCard
            name={fruit.name}
            image={fruit.image}
            id={fruit.id}
            cardClick={this.cardClick}
          />
        ))}
      </Wrapper>
    )
  };
};



export default App;
