import React from 'react';

export default () => (
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
);
