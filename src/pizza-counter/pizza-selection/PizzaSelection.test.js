import PizzaSelection from './PizzaSelection';

it('should calculate the sum of the prices of the pizza and all selected ingredients', () => {
    const expectedSum = 13;

    const props = {
        selectedPizza: {
            price: 10
        },
        selectedIngredients: [{
            price: 1
        },{
            price: 2
        }]
    };

    const totalPrice = new PizzaSelection(props).getTotalPrice();

    expect(totalPrice).toBe(expectedSum);
});

it('should return the price of the pizza when no ingredients are selected', () => {
    const expectedSum = 10;

    const props = {
        selectedPizza: {
            price: 10
        },
        selectedIngredients: []
    };

    const totalPrice = new PizzaSelection(props).getTotalPrice();

    expect(totalPrice).toBe(expectedSum);
});