export const PIZZAS_LOADED = 'PIZZAS_LOADED';
export const SELECT_PIZZA = 'SELECT_PIZZA';
export const INGREDIENTS_LOADED = 'INGREDIENTS_LOADED';
export const CHANGE_INGREDIENTS = 'CHANGE_INGREDIENTS';

export function pizzasLoaded(pizzas) {
    return {
        type: PIZZAS_LOADED,
        pizzas
    }
}

export function selectPizza(pizza) {
    return {
        type: SELECT_PIZZA,
        pizza
    }
}

export function ingredientsLoaded(ingredients) {
    return {
        type: INGREDIENTS_LOADED,
        ingredients
    }
}

export function changeIngredients(ingredients) {
    return {
        type: CHANGE_INGREDIENTS,
        ingredients
    }
}