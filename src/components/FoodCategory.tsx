import React from "react";
import { FoodItem } from "../types/food";

interface FoodCategoryProps {
  category: string;
  foodItems: FoodItem[];
}

const FoodCategory: React.FC<FoodCategoryProps> = ({ category, foodItems }) => {
  const filteredFoodItems = foodItems.filter(
    (food) => food.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{category}</h2>
      {filteredFoodItems.length > 0 ? (
        <ul className="space-y-4">
          {filteredFoodItems.map((food, index) => (
            <li key={index} className="border p-4 rounded-lg shadow-sm bg-white">
              <div className="text-lg font-semibold">{food.name}</div>
              <div className="text-gray-500">Type: {food.type}</div>
              <div className="text-blue-500">${food.price.toFixed(2)}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No items available for this category.</p>
      )}
    </div>
  );
};

export default FoodCategory;
