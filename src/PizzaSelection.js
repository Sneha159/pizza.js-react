import React from 'react';
import backend from './backend.json';

export default class PizzaSelection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pizzas: backend.pizzas,
      ingredients: backend.ingredients,
      selectedPizza: backend.pizzas[0],
      selectedIngredients: [],
    };
  }

  getSelectedPizzaClassName(pizza) {
    if (this.state.selectedPizza === pizza) {
      return 'pizza-tile--selected';
    }

    return '';
  }

  updateIngredients(isChecked, ingredient) {
    const updateState = {};

    if (isChecked) {
      updateState.selectedIngredients = this.state.selectedIngredients.concat(ingredient);
    } else {
      updateState.selectedIngredients = this.state.selectedIngredients.filter(currentIngredient => currentIngredient !== ingredient);
    }

    this.setState(updateState);
  }

  getTotalPrice() {
    return this.state.selectedPizza.price + this.state.selectedIngredients.reduce((sum, ingredient) => sum + ingredient.price, 0);
  }

  render() {
    return (
      <div id="pizzaSelection">
        <div className="pizza-tiles">
          {this.state.pizzas.map(pizza => (
            <div
              className={`pizza-tile ${this.getSelectedPizzaClassName(pizza)}`}
              key={pizza.name}
              onClick={() => this.setState({selectedPizza: pizza})}
            >
              <div className="pizza-tile__avatar">
                {pizza.name.split(' ').map(name => name[0]).join('')}
              </div>
              <div className="pizza-tile__content">
                <h3 className="pizza-tile__title">{pizza.name}</h3>
                <p className="pizza-tile__description">
                  {pizza.ingredients.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="pizza-selection-divider" />
        <div id="pizzaIngredients">
          {this.state.ingredients.map(ingredient => (
            <label key={ingredient.name} className="pizza-ingredients__item">
              <input
                value={ingredient.name}
                type="checkbox"
                onChange={event => this.updateIngredients(event.target.checked, ingredient)}
              />
              {` ${ingredient.name} - ${ingredient.price}`}
            </label>
          ))}
        </div>
        <hr className="pizza-selection-divider" />
        {this.getTotalPrice()}
        <button className="order-button">Add to Shopping Cart</button>
      </div>
    );
  }
}
