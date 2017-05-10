import React from 'react';
import {shallow} from 'enzyme';
import PizzaList from "./PizzaList";

it('should render the pizza\'s name as the title', () => {
    const pizzaName = 'Proscuitto et Funghi';
    const props = {
        pizzas: [{
            name: pizzaName,
            ingredients: []
        }]
    };

    const pizzaList = shallow(<PizzaList {...props}/>);

    const title = pizzaList.find('h3').text();
    expect(title).toBe(pizzaName);
});

describe('avatar', () => {
    it('should render the letter M for Margherita', () => {
        const expectedAvatar = 'M';

        const props = {
            pizzas: [{
                name: 'Margherita',
                ingredients: []
            }]
        };

        const pizzaList = shallow(<PizzaList {...props}/>);

        const title = pizzaList.find('.pizza-tile__avatar').text();
        expect(title).toBe(expectedAvatar);
    });

    it('should render PeF for Prosciutto et Funghi', () => {
        const expectedAvatar = 'PeF';

        const props = {
            pizzas: [{
                name: 'Prosciutto et Funghi',
                ingredients: []
            }]
        };

        const pizzaList = shallow(<PizzaList {...props}/>);

        const title = pizzaList.find('.pizza-tile__avatar').text();
        expect(title).toBe(expectedAvatar);
    });
});

it('should render comma separated list of ingredients', () => {
    const expectedIngredients = 'Schinken, Speck, Ananas';
    const props = {
        pizzas: [{
            name: '',
            ingredients: [
                'Schinken',
                'Speck',
                'Ananas'
            ]
        }]
    };

    const pizzaList = shallow(<PizzaList {...props}/>);

    const title = pizzaList.find('.pizza-tile__description').text();
    expect(title).toBe(expectedIngredients);
});
