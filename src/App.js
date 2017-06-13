import React, { Component } from 'react';
import PizzaPreview from './PizzaPreview';
import PizzaSelection from './PizzaSelection';

class App extends Component {

  render() {
    return (
      <main>
        <PizzaSelection />
        <PizzaPreview />
      </main>
    );
  }
}

export default App;
