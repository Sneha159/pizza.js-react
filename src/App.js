import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import PizzaCounter from './pizza-counter/PizzaCounter';
import PizzaCheckout from './pizza-checkout/PizzaCheckout';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
import pizzaApp from './pizzaApp.reducers';

const store = createStore(pizzaApp);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact path="/" component={PizzaCounter}/>
                        <Route path="/checkout" component={PizzaCheckout}/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
