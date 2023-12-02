import { useState } from 'react';

function AddFoodForm(props) {
  // Created a State to manage the form input values
  const [foodData, setFoodData] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });

  // Handling the form input changes
  const handleInputChange = event => {
    const { name, value } = event.target;
    setFoodData({ ...foodData, [name]: value });
  };

  // Handling the form submission
  const handleSubmit = event => {
    event.preventDefault();
    // Passing the form data to a function for further processing
    props.onSubmit(foodData);
    // Resetting the form after sumbission
    setFoodData({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  };
  return (
    <div>
      <h2>Create New Food</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={foodData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='image'>Image:</label>
          <input
            type='text'
            id='image'
            name='image'
            value={foodData.image}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='calories'>Calories:</label>
          <input
            type='text'
            id='calories'
            name='calories'
            value={foodData.calories}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor='servings'>Servings:</label>
          <input
            type='text'
            id='servings'
            name='servings'
            value={foodData.servings}
            onChange={handleInputChange}
          />
        </div>
        <button className='createButton' type='submit'>
          Create
        </button>
      </form>
    </div>
  );
}

export default AddFoodForm;
