import React, { useEffect, useState } from "react";
import FoodCategory from "./FoodCategory";
import { FoodItem } from "../types/food";

const UserMenu: React.FC = () => {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  // Load food items from localStorage when the component mounts
  useEffect(() => {
    const storedItems = localStorage.getItem("foodItems");
    if (storedItems) {
      setFoodItems(JSON.parse(storedItems));
    }
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Restaurant Menu</h1>
      <FoodCategory category="Main Dish" foodItems={foodItems} />
      <FoodCategory category="Dessert" foodItems={foodItems} />
      <FoodCategory category="Intercontinental" foodItems={foodItems} />
    </div>
  );
};

export default UserMenu;
