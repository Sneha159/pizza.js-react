import * as Actions from './actions';

const initialState = {
    pizzas: [],
    ingredients: [],
    selectedIngredients: []
};

export default function pizzaApp(state = initialState, action) {
    switch (action.type) {
        case Actions.PIZZAS_LOADED:
            return Object.assign({}, state, {
                pizzas: action.pizzas,
                selectedPizza: action.pizzas[0]
            });
        case Actions.SELECT_PIZZA:
            return Object.assign({}, state, {
                selectedPizza: action.pizza
            });
        case Actions.INGREDIENTS_LOADED:
            return Object.assign({}, state, {
                ingredients: action.ingredients
            });
        case Actions.CHANGE_INGREDIENTS:
            return Object.assign({}, state, {
                selectedIngredients: action.ingredients
            });
        default:
            return state;
    }
}