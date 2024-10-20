import React, { useState } from "react";
import FoodForm from "./FoodForm";
import FoodList from "./FoodList";
import { FoodItem } from "../types/food";

const AdminDashboard: React.FC = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  const addFoodItem = (newFood: FoodItem) => {
    setFoodItems([...foodItems, newFood]);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <FoodForm onAddFood={addFoodItem} />
      <FoodList foodItems={foodItems} />
    </div>
  );
};

export default AdminDashboard;
