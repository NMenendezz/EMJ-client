import React, { useEffect, useState } from "react";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const CategorySelection = ({ category, setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    // Fetch categories from the database here and set them in state
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${apiUrl}/categories`);
        const categories = response.data;
        setCategories(categories.sort((a, b) => a.name.localeCompare(b.name)));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleNewCategoryChange = (event) => {
    setNewCategoryName(event.target.value);
  };

  const handleNewCategorySubmit = async () => {
    if (newCategoryName.trim() !== "") {
      try {
        const response = await axios.post(`${apiUrl}/categories/new_category`, {
          name: newCategoryName.trim(),
        });
        setCategories([...categories, response.data].sort((a, b) => a.name.localeCompare(b.name)));
        setNewCategoryName(""); // Reset the input field
      } catch (error) {
        console.error("Error creating category:", error);
      }
    }
  };

  return (
    <div className="new-post__category">
      <h2>Categoría</h2>
      {categories.map((categoryOption) => (
        <label key={categoryOption._id}>
          <input
            type="radio"
            name="cat"
            value={categoryOption.name}
            className="new-post__category--radio"
            checked={category === categoryOption.name}
            onChange={() => setCategory(categoryOption.name)}
          />
          {categoryOption.name}
        </label>
      ))}
      {/* Input field for entering a new category */}
      <label>
        <input
          type="text"
          name="cat"
          value={newCategoryName}
          className="new-post__category--input"
          placeholder="Nueva categoría"
          onChange={handleNewCategoryChange}
        />
        <button type="button" onClick={handleNewCategorySubmit}>
          Añadir
        </button>
      </label>
    </div>
  );
};

export default CategorySelection;
