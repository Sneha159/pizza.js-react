import React from 'react';
import ShoppingCart from './ShoppingCart';

function togglePreview() {
    document.getElementById('pizzaPreview').classList.toggle('pizza-preview--open');
}

export default () => (
    <div id="pizzaPreview">
        <button onClick={togglePreview} className="pizza-preview-toggler"><div className="pizza-preview-toggler__icon">&lt;</div></button>
        <div className="pizza-preview-scroll">
            <div id="pizzaAnimation">
                <img className="pizza-picture" src="/images/pizza.png" alt="Pizza"/>
            </div>
            <ShoppingCart />
        </div>
    </div>
);
