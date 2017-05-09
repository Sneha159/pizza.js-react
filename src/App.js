import React, {Component} from 'react';
import PizzaSelection from './PizzaSelection';
import PizzaPreview from './PizzaPreview';

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
