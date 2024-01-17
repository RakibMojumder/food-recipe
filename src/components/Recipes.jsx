"use client";

import Recipe from "./Recipe";
import { useGetRecipesQuery } from "@/redux/api/recipeApi";
import RecipeSkelton from "./skelton/RecipeSkelton";
import SearchBox from "./SearchBox";

const Recipes = () => {
  const { isLoading, data } = useGetRecipesQuery();

  return (
    <div className="sm:py-10">
      <div className="text-center">
        <SearchBox className={"flex sm:hidden my-5"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {isLoading &&
          [...Array(10)].map((_, index) => <RecipeSkelton key={index} />)}
        {data?.map((recipe) => (
          <Recipe key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
