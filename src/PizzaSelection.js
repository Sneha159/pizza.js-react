import React from 'react';
import backend from './backend.json';

export default class PizzaSelection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pizzas: backend.pizzas,
      ingredients: backend.ingredients,
    };
  }

  render() {
    return (
      <div id="pizzaSelection">
        <div className="pizza-tiles">
          {this.state.pizzas.map(pizza => (
            <div
              className="pizza-tile"
              key={pizza.name}
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
              <input value={ingredient.name} type="checkbox" />
              {ingredient.name}
            </label>
          ))}
        </div>
        <hr className="pizza-selection-divider" />
        <button className="order-button">Add to Shopping Cart</button>
      </div>
    );
  }
}
