import React from "react";

const RecipeDetailSkelton = () => {
  return (
    <div className="lg:w-2/3 xl:w-1/2 mx-auto mt-10 border p-4 rounded-md animate-pulse">
      <div className="w-full h-[400px] rounded bg-neutral-300" />
      <div className="space-y-6 mt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold"></h2>
          <div className="flex items-center gap-x-2"></div>
        </div>
        <div>
          <ul className="list-disc list-inside marker:text-neutral-300 space-y-2">
            {[...Array(3)].map((ingredient, index) => (
              <li key={index} className="bg-neutral-300 rounded w-1/2">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-black"></p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailSkelton;
