import React from 'react';

export default ({ ingredients, onChanged }) => (
  <div id="pizzaIngredients">
    {ingredients.map(ingredient => (
      <label key={ingredient.name} className="pizza-ingredients__item">
        <input
          onChange={event => onChanged(event.target.checked, ingredient)}
          value={ingredient.name}
          type="checkbox"
        />
        {` ${ingredient.name} - ${ingredient.price}`}
      </label>
    ))}
  </div>
);