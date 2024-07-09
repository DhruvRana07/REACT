import React, { useState } from 'react';

const initialFormState = {
  title: '',
  price: '',
  category: '',
  description: '',
  image: '',
};

const Form = ({ onAddPost }) => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5462/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newPost) => {
        onAddPost(newPost);
        setFormData(initialFormState);
        alert('Data added successfully');
      })
      .catch((err) => {
        alert('Failed to add data');
        console.error(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter Title"
          required
        />
        <br />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Enter Price"
          step="0.01"
          required
        />
        <br />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select your category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="beauty_and_personal_care">
            Beauty and Personal Care
          </option>
          <option value="home_and_kitchen">Home and Kitchen</option>
          <option value="groceries">Groceries</option>
          <option value="health_and_wellness">Health and Wellness</option>
          <option value="sports_and_outdoors">Sports and Outdoors</option>
          <option value="books_music_and_movies">
            Books, Music, and Movies
          </option>
          <option value="toys_and_games">Toys and Games</option>
          <option value="automotive">Automotive</option>
          <option value="pet_supplies">Pet Supplies</option>
          <option value="office_supplies">Office Supplies</option>
          <option value="garden_and_outdoor">Garden and Outdoor</option>
          <option value="jewelry">Jewelry</option>
        </select>
        <br />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter Description"
          required
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
