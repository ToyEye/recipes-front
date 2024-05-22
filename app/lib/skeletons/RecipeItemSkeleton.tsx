import React from "react";

const RecipeItemSkeleton = () => {
  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden list-none">
      <div className="animate-pulse">
        <div className="bg-gray-300 h-48 w-full"></div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">Loading...</h2>
          <div className="flex items-center mb-2">
            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
              Loading...
            </span>
          </div>
          <p className="text-gray-600">Loading...</p>
          <a
            className="text-blue-500 hover:text-blue-700"
            href="#"
            onClick={(e) => e.preventDefault()}
          >
            View Recipe
          </a>
        </div>
      </div>
    </li>
  );
};

export default RecipeItemSkeleton;
