import React from 'react';
import formatPrice from '../priceFormatter';

export default ({ ingredients, onChanged }) => (
  <div id="pizzaIngredients">
    {ingredients.map(ingredient => (
      <label key={ingredient.name} className="pizza-ingredients__item">
        <input
          onChange={event => onChanged(event.target.checked, ingredient)}
          value={ingredient.name}
          type="checkbox"
        />
        {` ${ingredient.name} - ${formatPrice(ingredient.price)}`}
      </label>
    ))}
  </div>
);