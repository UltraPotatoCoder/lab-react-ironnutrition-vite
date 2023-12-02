function FoodBox(props) {
  const totalCalories = props.food.servings * props.food.calories;

  return (
    <div className='foodCard'>
      <p>{props.food.name}</p>

      <img src={props.food.image} alt={props.food.name} />

      <p>Calories: {props.food.calories}</p>
      <p>Servings {props.food.servings}</p>

      <p>
        <b>Total Calories: {totalCalories} kcal</b>
      </p>

      <button onClick={() => props.deleteFood(props.food.id)}>Delete</button>
    </div>
  );
}

export default FoodBox;
