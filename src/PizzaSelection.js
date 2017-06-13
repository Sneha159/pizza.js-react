import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from './priceFormatter';
import { PizzaPropType } from './propTypes';

class PizzaSelection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      pizzas: [],
      ingredients: [],
      selectedIngredients: [],
    };
  }

  componentWillMount() {
    fetch('http://localhost:3001/pizzas')
      .then(response => response.json())
      .then(pizzas => {
        this.setState({
          pizzas,
        });
        this.props.onSelectPizza(pizzas[0]);
      })
      .catch(err => console.error(err));

    fetch('http://localhost:3001/ingredients')
      .then(response => response.json())
      .then(ingredients => this.setState({ ingredients }))
      .catch(err => console.error(err));
  }

  getSelectedPizzaClassName(pizza) {
    if (this.props.selectedPizza === pizza) {
      return 'pizza-tile--selected';
    }

    return '';
  }

  updateIngredients(isChecked, ingredient) {
    const updateState = {};

    if (isChecked) {
      updateState.selectedIngredients = this.state.selectedIngredients.concat(ingredient);
    } else {
      updateState.selectedIngredients = this.state.selectedIngredients.filter(currentIngredient => currentIngredient !== ingredient);
    }

    this.setState(updateState);
  }

  getTotalPrice() {
    if (this.props.selectedPizza) {
      return this.props.selectedPizza.price + this.state.selectedIngredients.reduce((sum, ingredient) => sum + ingredient.price, 0);
    }

    return 0;
  }

  render() {
    return (
      <div id="pizzaSelection">
        <div className="pizza-tiles">
          {this.state.pizzas.map(pizza => (
            <div
              className={`pizza-tile ${this.getSelectedPizzaClassName(pizza)}`}
              key={pizza.name}
              onClick={() => this.props.onSelectPizza(pizza)}
            >
              <div className="pizza-tile__avatar">
                {pizza.name.split(' ').map(name => name[0]).join('')}
              </div>
              <div className="pizza-tile__content">
                <h3 className="pizza-tile__title">{pizza.name}</h3>
                <p className="pizza-tile__description">
                  {pizza.ingredients.join(', ')}
                </p>
              </div>
            </div>
          ))}
        </div>
        <hr className="pizza-selection-divider" />
        <div id="pizzaIngredients">
          {this.state.ingredients.map(ingredient => (
            <label key={ingredient.name} className="pizza-ingredients__item">
              <input
                value={ingredient.name}
                type="checkbox"
                onChange={event => this.updateIngredients(event.target.checked, ingredient)}
              />
              {` ${ingredient.name} - ${formatPrice(ingredient.price)}`}
            </label>
          ))}
        </div>
        <hr className="pizza-selection-divider" />
        {formatPrice(this.getTotalPrice())}
        <button className="order-button">Add to Shopping Cart</button>
      </div>
    );
  }
}

PizzaSelection.propTypes = {
  selectedPizza: PizzaPropType,
  onSelectPizza: PropTypes.func.isRequired,
};

export default PizzaSelection;
