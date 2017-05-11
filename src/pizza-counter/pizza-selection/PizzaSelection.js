import React from 'react';
import PropTypes from 'prop-types';
import PizzaList from './PizzaList';
import IngredientsSelection from './IngredientsSelection';
import {IngredientPropType, PizzaPropType} from "../../propTypes";
import formatPrice from './priceFormatter';

class PizzaSelection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedIngredients: [],
            pizzas: [],
            ingredients: []
        };
    }

    componentWillMount() {
        fetch('http://localhost:3001/pizzas')
            .then(response => response.json())
            .then(pizzas => {
                this.setState({ pizzas });
                this.props.onSelectPizza(pizzas[0]);
            })
            .catch(err => console.error(err));

        fetch('http://localhost:3001/ingredients')
            .then(response => response.json())
            .then(ingredients => this.setState({ ingredients }))
            .catch(err => console.error(err));
    }

    updateIngredients(checked, ingredient) {
        let ingredients = this.props.selectedIngredients;

        if (checked) {
            ingredients = ingredients.concat(ingredient);
        } else {
            ingredients = ingredients.filter(currentIngredient => currentIngredient !== ingredient);
        }

        this.props.onChangeIngredients(ingredients);
    }

    getTotalPrice() {
        const ingredientsPrice = this.props.selectedIngredients.reduce((sum, ingredient) => sum + ingredient.price, 0);
        return this.props.selectedPizza.price + ingredientsPrice;
    }

    render() {
        return (
            <div id="pizzaSelection">
                <PizzaList
                    pizzas={this.state.pizzas}
                    selectedPizza={this.props.selectedPizza}
                    onSelected={(pizza) => this.props.onSelectPizza(pizza)}
                />
                <hr className="pizza-selection-divider"/>
                <IngredientsSelection
                    ingredients={this.state.ingredients}
                    onChanged={(checked, ingredient) => this.updateIngredients(checked, ingredient)}
                />
                <hr className="pizza-selection-divider"/>
                {this.props.selectedPizza && formatPrice(this.getTotalPrice())}
                <button className="link-button">Add to Shopping Cart</button>
            </div>
        );
    }
}

PizzaSelection.propTypes = {
    selectedPizza: PizzaPropType,
    selectedIngredients: PropTypes.arrayOf(IngredientPropType).isRequired,
    onSelectPizza: PropTypes.func.isRequired,
    onChangeIngredients: PropTypes.func.isRequired,
};

export default PizzaSelection;