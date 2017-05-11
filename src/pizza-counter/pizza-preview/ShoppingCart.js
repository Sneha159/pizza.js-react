import React from 'react';
import { Link } from 'react-router-dom';
export default () => (
    <div id="shoppingCart">
        <ul className="shopping-cart-list">
            <li className="shopping-cart-list__item">
                <div className="shopping-cart-list-item-title">
                    Margherita
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
                    14.90
                </div>
            </li>
            <li className="shopping-cart-list__item">
                <div className="shopping-cart-list-item-title">
                    Calzone
                </div>
                <div className="shopping-cart-list-item-tools">
                    <select defaultValue={2}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    12.50
                </div>
            </li>
            <li className="shopping-cart-list__item">
                <div className="shopping-cart-list-item-title">
                    Prosciutto
                </div>
                <div className="shopping-cart-list-item-tools">
                    <select defaultValue={3}>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    7.00
                </div>
            </li>
        </ul>
        <div className="shopping-cart-order">
            <Link className="link-button" to="/checkout">Order</Link>
        </div>
    </div>
);