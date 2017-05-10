import React from 'react';
import ShoppingCart from './ShoppingCart';

function togglePreview() {
    document.getElementById('pizzaPreview').classList.toggle('pizza-preview--open');
}

export default ({ selectedPizza, selectedIngredients }) => (
    <div id="pizzaPreview">
        <button onClick={togglePreview} className="pizza-preview-toggler"><div className="pizza-preview-toggler__icon">&lt;</div></button>
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
