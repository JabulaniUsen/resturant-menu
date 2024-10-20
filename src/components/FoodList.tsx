// FoodList.tsx
import React from "react";
import { FoodItem } from "../types/food";

interface FoodListProps {
  foodItems: FoodItem[];
}

const FoodList: React.FC<FoodListProps> = ({ foodItems }) => {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold">Food List</h2>
      <ul className="mt-4 space-y-2">
        {foodItems.map((food, index) => (
          <li key={index} className="border p-4">
            <div>{food.name}</div>
            <div>${food.price}</div>
            <div>Category: {food.category}</div>
            <div>Type: {food.type}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
