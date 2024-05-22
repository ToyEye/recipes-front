import Section from "@/app/ui/Section";
import React from "react";

const RecipeDetailsSkeleton = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="animate-pulse overflow-hidden">
          <div className="bg-gray-300 h-96 w-full md:w-[720px] lg:w-[660px]"></div>
        </div>
        <div>
          <div className="animate-pulse">
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 h-8 w-24 rounded-full"></div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Ingredients:</h2>
            <ul className="list-disc pl-6 mb-4 flex flex-col gap-1">
              <li className="bg-gray-300 rounded-xl"></li>
              <li className="bg-gray-300 rounded-xl"></li>
              <li className="bg-gray-300 rounded-xl"></li>
            </ul>
            <h2 className="text-2xl font-bold mb-2">Instructions:</h2>
            <ol className="list-decimal pl-6 mb-4 flex flex-col gap-1">
              <li className="bg-gray-300 rounded-xl"></li>
              <li className="bg-gray-300 rounded-xl"></li>
              <li className="bg-gray-300 rounded-xl"></li>
              <li className="bg-gray-300 rounded-xl"></li>
            </ol>
            <div className="flex items-center mb-4">
              <div className="bg-gray-300 h-8 w-8 rounded-full mr-2"></div>
              <div>
                <h3 className=" bg-gray-200 rounded-xl h-8 w-24"></h3>
                <p className="text-gray-600">Author</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default RecipeDetailsSkeleton;
