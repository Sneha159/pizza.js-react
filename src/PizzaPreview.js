import React from 'react';
import PropTypes from 'prop-types';
import ShoppingCart from './ShoppingCart';
import { IngredientPropType, PizzaPropType } from './propTypes';

function togglePreview() {
  document.getElementById('pizzaPreview').classList.toggle('pizza-preview--open');
}

const PizzaPreview = ({ selectedPizza, selectedIngredients }) => (
  <div id="pizzaPreview">
    <button onClick={togglePreview} className="pizza-preview-toggler">
      <div className="pizza-preview-toggler__icon">&lt;</div>
    </button>
    <div className="pizza-preview-scroll">
      <div id="pizzaAnimation">
        <img className="pizza-picture" src="/images/pizza.png" alt="Pizza" />
        <h3>{selectedPizza && selectedPizza.name}</h3>
        <ul>
          {selectedIngredients.map(ingredient => (
            <li key={ingredient.name}>{ingredient.name}</li>
          ))}
        </ul>
      </div>
      <ShoppingCart />
    </div>
  </div>
);

PizzaPreview.propTypes = {
  selectedPizza: PizzaPropType,
  selectedIngredients: PropTypes.arrayOf(IngredientPropType),
};

export default PizzaPreview;
