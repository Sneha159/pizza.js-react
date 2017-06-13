import React, { Component } from 'react';

class App extends Component {
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
              <div className="pizza-tile__content pizza-tile--selected">
                <h3 className="pizza-tile__title">Napoli</h3>
                <p className="pizza-tile__description">
                  Tomate, Mozzarella, Sardellen, Kapern
                </p>
              </div>
            </div>
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
        <div id="pizzaPreview">
          <button onclick="togglePreview()" className="pizza-preview-toggler">
            <div className="pizza-preview-toggler__icon">&lt;</div>
          </button>
          <div className="pizza-preview-scroll">
            <div id="pizzaAnimation">
              <img className="pizza-picture" alt="Pizza" src="/images/pizza.png" />
            </div>
            <div id="shoppingCart">
              <ul className="shopping-cart-list">
                <li className="shopping-cart-list__item">
                  <div className="shopping-cart-list-item-title">
                    Margherita
                  </div>
                  <div className="shopping-cart-list-item-tools">
                    <select>
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
                    <select>
                      <option>0</option>
                      <option>1</option>
                      <option selected>2</option>
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
                    <select>
                      <option>0</option>
                      <option>1</option>
                      <option>2</option>
                      <option selected>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    7.00
                  </div>
                </li>
              </ul>
              <div className="shopping-cart-order">
                <button className="order-button" onclick="orderPizza()">Order</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
