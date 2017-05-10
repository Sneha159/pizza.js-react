import React, {Component} from 'react';
import PizzaSelection from './PizzaSelection';
import PizzaPreview from './PizzaPreview';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    selectPizza(pizza) {
        this.setState({
            selectedPizza: pizza
        })
    }

    render() {
        return (
            <main>
                <PizzaSelection
                    selectedPizza={this.state.selectedPizza}
                    onSelectPizza={(pizza) => this.selectPizza(pizza)}
                />
                <PizzaPreview />
            </main>
        );
    }
}

export default App;
