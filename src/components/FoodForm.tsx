
import React, { useState } from "react";
import { FoodItem } from "../types/food";

interface FoodFormProps {
  onAddFood: (food: FoodItem) => void;
}

const FoodForm: React.FC<FoodFormProps> = ({ onAddFood }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newFood: FoodItem = { name, price, category, type };
    onAddFood(newFood);
    setName("");
    setPrice(0);
    setCategory("");
    setType("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        className="border p-2 w-full"
        type="text"
        placeholder="Food Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(Number(e.target.value))}
      />
      <input
        className="border p-2 w-full"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <select
        className="border p-2 w-full"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="">Select Type</option>
        <option value="Dessert">Dessert</option>
        <option value="Intercontinental">Intercontinental</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white p-2">
        Add Food
      </button>
    </form>
  );
};

export default FoodForm;
