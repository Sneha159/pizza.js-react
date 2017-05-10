import React from 'react';

export default (props) => (
  <div id="pizzaIngredients">
    {props.ingredients.map(ingredient => (
      <label key={ingredient.name} className="pizza-ingredients__item">
        <input
          onChange={event => props.onChanged(event.target.checked, ingredient)}
          value={ingredient.name}
          type="checkbox"
        />
        {` ${ingredient.name} - ${ingredient.price}`}
      </label>
    ))}
  </div>
);