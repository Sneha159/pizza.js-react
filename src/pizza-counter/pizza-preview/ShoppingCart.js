import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import formatPrice from '../priceFormatter';

const ShoppingCart = ({ shoppingCart }) => (
    <div id="shoppingCart">
        <ul className="shopping-cart-list">
            {shoppingCart.map(({ pizza, price }, index) => (
                <li key={index} className="shopping-cart-list__item">
                    <div className="shopping-cart-list-item-title">
                        {pizza.name}
                    </div>
                    <div className="shopping-cart-list-item-tools">
                        <select defaultValue={1}>
                            <option>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        {formatPrice(price)}
                    </div>
                </li>
            ))}
        </ul>
        <div className="shopping-cart-order">
            <Link className="link-button" to="/checkout">Order</Link>
        </div>
    </div>
);

export default connect(
    (state) => ({
        shoppingCart: state.pizzaApp.shoppingCart
    })
)(ShoppingCart)