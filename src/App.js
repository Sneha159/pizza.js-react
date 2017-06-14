import React, { Component } from 'react';
import PizzaPreview from './PizzaPreview';
import PizzaSelection from './PizzaSelection';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <PizzaSelection
          selectedPizza={this.state.selectedPizza}
          onSelectPizza={selectedPizza => this.setState({ selectedPizza })}
        />
        <PizzaPreview
          selectedPizza={this.state.selectedPizza}
        />
      </main>
    );
  }
}

export default App;
