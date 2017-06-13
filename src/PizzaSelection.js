import React from 'react';
import backend from './backend.json';

export default class PizzaSelection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pizzas: backend.pizzas,
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
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Salami</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Schinken</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Artischocken</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Ananas</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Kapern</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Sardellen</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Büffelmozzarella</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Cherry-Tomaten</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Gruyère</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Rucola</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Speck</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Oliven</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Trüffel</label>
          <label className="pizza-ingredients__item"><input type="checkbox" />
            Scharf</label>
        </div>
        <hr className="pizza-selection-divider" />
        <button className="order-button">Add to Shopping Cart</button>
      </div>
    );
  }
}
