import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PizzaCounter from './pizza-counter/PizzaCounter';
import PizzaCheckout from './pizza-checkout/PizzaCheckout';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={PizzaCounter}/>
                    <Route path="/checkout" component={PizzaCheckout}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
