import React from 'react';

function getSelectedPizzaClassName(selectedPizza, currentPizza) {
  if (selectedPizza && selectedPizza.name === currentPizza.name) {
    return 'pizza-tile--selected';
  }

  return '';
}

export default (props) => (
  <div className="pizza-tiles">
    {props.pizzas.map(pizza => (
      <div
        key={pizza.name}
        className={`pizza-tile ${getSelectedPizzaClassName(props.selectedPizza, pizza)}`}
        onClick={() => props.onSelected(pizza)}
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
);