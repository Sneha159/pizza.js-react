import React from 'react';
import ShoppingCart from './ShoppingCart';

export default class PizzaPreview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            previewOpened: false
        }
    }

    render() {
        const { selectedPizza, selectedIngredients } = this.props;

        return (
            <div id="pizzaPreview" className={this.state.previewOpened ? 'pizza-preview--open' : null}>
                <button
                    onClick={() => this.setState({previewOpened: !this.state.previewOpened})}
                    className="pizza-preview-toggler"
                >
                    <div className="pizza-preview-toggler__icon">&lt;</div>
                </button>
                <div className="pizza-preview-scroll">
                    <div id="pizzaAnimation">
                        <img className="pizza-picture" src="/images/pizza.png" alt="Pizza"/>
                        <h3>{selectedPizza && selectedPizza.name}</h3>
                        <ul>
                            {selectedIngredients.map(ingredient => <li key={ingredient.name}>{ingredient.name}</li>)}
                        </ul>
                    </div>
                    <ShoppingCart />
                </div>
            </div>
        );
    }
}
