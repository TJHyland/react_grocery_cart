import React from 'react';
import Food from './Food';

const FoodList = ({ foods, updateFood, deleteFood }) => (
  <div>
    { foods.map( food =>
      <Food
        key={food.id}
        {...food}
        updateFood={updateFood}
        deleteFood={deleteFood}
        />
      )
    }
  </div>
)

export default FoodList;