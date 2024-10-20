import React, { useState, useEffect } from "react";

interface FoodItem {
  name: string;
  price: number;
  category: string;
  type: string;
}

const AdminDashboard: React.FC = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | "">("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  // Load food items from localStorage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem("foodItems");
    if (storedItems) {
      setFoodItems(JSON.parse(storedItems));
    }
  }, []);

  // Save food items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("foodItems", JSON.stringify(foodItems));
  }, [foodItems]);

  const handleAddFood = () => {
    if (!name || !price || !category || !type) {
      alert("Please fill out all fields");
      return;
    }

    const newFoodItem: FoodItem = { name, price: Number(price), category, type };
    setFoodItems([...foodItems, newFoodItem]);

    // Clear input fields after submission
    setName("");
    setPrice("");
    setCategory("");
    setType("");
  };

  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="mb-4">
        <label className="block text-gray-700">Food Name</label>
        <input
          className="w-full border px-4 py-2 rounded-lg"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter food name"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price</label>
        <input
          className="w-full border px-4 py-2 rounded-lg"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : "")}
          placeholder="Enter price"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <select
          className="w-full border px-4 py-2 rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          <option value="Main Dish">Main Dish</option>
          <option value="Dessert">Dessert</option>
          <option value="Intercontinental">Intercontinental</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-gray-700">Type</label>
        <input
          className="w-full border px-4 py-2 rounded-lg"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="e.g. Vegetarian, Spicy, etc."
        />
      </div>
      <button
        onClick={handleAddFood}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Add Food Item
      </button>
    </div>
  );
};

export default AdminDashboard;
