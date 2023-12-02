import './App.css';
import { useState } from 'react';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  const [foods, setFoods] = useState(foodsJson);

  const deleteFood = id => {
    const filteredFood = foods.filter(foods => id !== foods.id);
    setFoods(filteredFood);
  };

  const addFood = newFood => {
    setFoods([newFood, ...foods]);
  };

  return (
    <div className='App'>
      <h1>Foods List</h1>

      <AddFoodForm onSubmit={addFood} />

      {foods.map(foods => {
        return <FoodBox key={foods.id} food={foods} deleteFood={deleteFood} />;
      })}
    </div>
  );
}

export default App;
