import React, {Component} from 'react';
import './App.css';

class App extends Component {

    togglePreview() {
        document.getElementById('pizzaPreview').classList.toggle('pizza-preview--open');
    }

    render() {
        return (
            <main>
                <div id="pizzaSelection">
                    <div className="pizza-tiles">
                        <div className="pizza-tile">
                            <div className="pizza-tile__avatar">
                                M
                            </div>
                            <div className="pizza-tile__content">
                                <h3 className="pizza-tile__title">Margherita</h3>
                                <p className="pizza-tile__description">
                                    Tomate, Mozzarella, Oregano
                                </p>
                            </div>
                        </div>
                        <div className="pizza-tile">
                            <div className="pizza-tile__avatar">
                                P&F
                            </div>
                            <div className="pizza-tile__content">
                                <h3 className="pizza-tile__title">Prosciutto et Funghi</h3>
                                <p className="pizza-tile__description">
                                    Tomate, Mozzarella, Oregano, Schinken, Pilze und noch mehr Pilze
                                </p>
                            </div>
                        </div>
                        <div className="pizza-tile">
                            <div className="pizza-tile__avatar">
                                M
                            </div>
                            <div className="pizza-tile__content">
                                <h3 className="pizza-tile__title">Margherita</h3>
                                <p className="pizza-tile__description">
                                    Tomate, Mozzarella, Oregano
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr className="pizza-selection-divider"/>
                    <p>
                        checkboxes
                    </p>
                    <hr className="pizza-selection-divider"/>
                    <button className="order-button">Add to Shopping Cart</button>
                </div>
                <div id="pizzaPreview">
                    <button onClick={this.togglePreview} className="pizza-preview-toggler">&lt;</button>
                    <div className="pizza-preview-scroll">
                        <div id="pizzaAnimation">
                            <img className="pizza-picture" src="/images/pizza.png" alt="Pizza"/>
                        </div>
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
                                <button className="order-button">Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
