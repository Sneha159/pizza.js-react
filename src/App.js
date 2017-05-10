import React, {Component} from 'react';
import PizzaSelection from './pizza-selection/PizzaSelection';
import PizzaPreview from './pizza-preview/PizzaPreview';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedIngredients: []
        };
    }

    render() {
        return (
            <main>
                <PizzaSelection
                    selectedPizza={this.state.selectedPizza}
                    selectedIngredients={this.state.selectedIngredients}
                    onSelectPizza={(selectedPizza) => this.setState({ selectedPizza })}
                    onChangeIngredients={(selectedIngredients) => this.setState({ selectedIngredients })}
                />
                <PizzaPreview
                    selectedPizza={this.state.selectedPizza}
                    selectedIngredients={this.state.selectedIngredients}
                />
            </main>
        );
    }
}

export default App;
