import React, { Component } from 'react';
import PizzaPreview from './PizzaPreview';

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
              <div className="pizza-tile__content">
                <h3 className="pizza-tile__title">Margherita</h3>
                <p className="pizza-tile__description">
                  Tomate, Mozzarella, Oregano
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
        <PizzaPreview />
      </main>
    );
  }
}

export default App;
