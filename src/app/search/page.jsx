"use client";

import Recipe from "@/components/Recipe";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SearchResult = () => {
  const searchParams = useSearchParams();
  const searchValue = searchParams.get("value");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const getSearchRecipe = async () => {
      const res = await axios.get(`/api/recipe?search=${searchValue}`);
      setRecipes(res.data);
    };
    getSearchRecipe();
  }, [searchValue]);

  return (
    <div>
      <h1>Search Result</h1>
      <div>
        {recipes?.map((recipe) => (
          <Recipe key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
