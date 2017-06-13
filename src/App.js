import React, { Component } from 'react';
import PizzaPreview from './PizzaPreview';
import PizzaSelection from './PizzaSelection';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  selectPizza(selectedPizza) {
    this.setState({
      selectedPizza,
    });
  }

  render() {
    return (
      <main>
        <PizzaSelection
          selectedPizza={this.state.selectedPizza}
          onSelectPizza={pizza => this.selectPizza(pizza)}
        />
        <PizzaPreview
          selectedPizza={this.state.selectedPizza}
        />
      </main>
    );
  }
}

export default App;
