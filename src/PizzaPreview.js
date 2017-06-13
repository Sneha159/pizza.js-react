import React from 'react';
import ShoppingCart from './ShoppingCart';
import { PizzaPropType } from './propTypes';

function togglePreview() {
  document.getElementById('pizzaPreview').classList.toggle('pizza-preview--open');
}

const PizzaPreview = ({ selectedPizza }) => (
  <div id="pizzaPreview">
    <button onClick={togglePreview} className="pizza-preview-toggler">
      <div className="pizza-preview-toggler__icon">&lt;</div>
    </button>
    <div className="pizza-preview-scroll">
      <div id="pizzaAnimation">
        <img className="pizza-picture" src="/images/pizza.png" alt="Pizza" />
        <h3>{selectedPizza && selectedPizza.name}</h3>
      </div>
      <ShoppingCart />
    </div>
  </div>
);

PizzaPreview.propTypes = {
  selectedPizza: PizzaPropType,
};

export default PizzaPreview;
