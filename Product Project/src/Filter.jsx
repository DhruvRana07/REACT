import React, { useState } from 'react';

const Filter = ({
  selectedCategories,
  setSelectedCategories,
  setSortOrder,
  onSearchChange,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const categories = [
    'electronics', 'jewelery', 'fashion', 'beauty_and_personal_care', 'home_and_kitchen', 'groceries', 
    'health_and_wellness', 'sports_and_outdoors', 'books_music_and_movies', 'toys_and_games', 
    'automotive', 'pet_supplies', 'office_supplies', 'garden_and_outdoor'
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((cat) => cat !== category)
        : [...selectedCategories, category]
    );
  };

  const handleClearAll = () => {
    setSelectedCategories([]);
  };

  const handleSortChange = (e) => {
    const selectedOption = e.target.value;

    switch (selectedOption) {
      case 'priceLowToHigh':
        setSortOrder('price');
        break;
      case 'priceHighToLow':
        setSortOrder('-price');
        break;
      case 'titleAToZ':
        setSortOrder('title');
        break;
      case 'titleZToA':
        setSortOrder('-title');
        break;
      default:
        setSortOrder('default');
        break;
    }
  };

  return (
    <div className="filter-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="sort-filter">
        <label htmlFor="sort">Sort By : </label>
        <select id="sort" onChange={handleSortChange}>
          <option value="default">Default</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="titleAToZ">Title: A to Z</option>
          <option value="titleZToA">Title: Z to A</option>
        </select>
      </div>
      <div className="category-filter">
        <div className="category-list">
          {categories.map((category) => (
            <label key={category} className="filter-label">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </label>
          ))}
        </div>
      </div>
      <button className="clear-all-button" onClick={handleClearAll}>
        Clear All
      </button>
    </div>
  );
};

export default Filter;
