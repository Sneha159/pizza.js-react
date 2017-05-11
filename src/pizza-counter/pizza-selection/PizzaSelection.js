import React from 'react';
import PropTypes from 'prop-types';
import PizzaList from './PizzaList';
import IngredientsSelection from './IngredientsSelection';
import {IngredientPropType, PizzaPropType} from "../../propTypes";
import formatPrice from './priceFormatter';
import { connect } from 'react-redux';
import { pizzasLoaded, selectPizza, ingredientsLoaded, changeIngredients} from "../../actions";

class PizzaSelection extends React.Component {

    componentWillMount() {
        fetch('http://localhost:3001/pizzas')
            .then(response => response.json())
            .then(this.props.onPizzasLoaded)
            .catch(err => console.error(err));

        fetch('http://localhost:3001/ingredients')
            .then(response => response.json())
            .then(this.props.onIngredientsLoaded)
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
                    pizzas={this.props.pizzas}
                    selectedPizza={this.props.selectedPizza}
                    onSelected={(pizza) => this.props.onSelectPizza(pizza)}
                />
                <hr className="pizza-selection-divider"/>
                <IngredientsSelection
                    ingredients={this.props.ingredients}
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

export default connect(
    (state) => ({
        pizzas: state.pizzas,
        ingredients: state.ingredients,
        selectedPizza: state.selectedPizza,
        selectedIngredients: state.selectedIngredients
    }),
    (dispatch) => ({
        onPizzasLoaded(pizzas) {
            dispatch(pizzasLoaded(pizzas))
        },
        onIngredientsLoaded(ingredients) {
            dispatch(ingredientsLoaded(ingredients))
        },
        onSelectPizza(pizza) {
            dispatch(selectPizza(pizza))
        },
        onChangeIngredients(ingredients) {
            dispatch(changeIngredients(ingredients))
        }
    })
)(PizzaSelection);