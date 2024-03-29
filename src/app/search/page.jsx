"use client";

import Recipe from "@/components/Recipe";
import RecipeSkelton from "@/components/skelton/RecipeSkelton";
import { useGetSearchRecipeQuery } from "@/redux/api/recipeApi";
import { useSearchParams } from "next/navigation";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("value");
  const { data, isLoading } = useGetSearchRecipeQuery(searchValue);

  if (data?.length === 0)
    return (
      <div className="h-[calc(100vh-200px)] flex justify-center">
        <h3 className="text-xl font-semibold mt-14">No Recipe Found</h3>
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 py-10">
      {isLoading &&
        [...Array(5)].map((_, index) => <RecipeSkelton key={index} />)}
      {data?.map((recipe) => (
        <Recipe key={recipe._id} recipe={recipe} />
      ))}
    </div>
  );
};

export default SearchResult;
