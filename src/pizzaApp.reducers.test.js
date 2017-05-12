import pizzaAppReducer from './pizzaApp.reducers';
import * as Actions from './actions';

it('should select the first pizza when pizzas are loaded', () => {
    const expectedSelectedPizza = {name: 'Margherita'};
    const pizzas = [expectedSelectedPizza, {name: 'Funghi'}];

    const state = pizzaAppReducer(undefined, Actions.pizzasLoaded(pizzas));

    expect(state.selectedPizza).toEqual(expectedSelectedPizza);
});