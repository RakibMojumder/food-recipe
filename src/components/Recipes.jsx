import { getRecipes } from "@/lib/getRecipes";
import Recipe from "./Recipe";

const Recipes = async () => {
  const recipes = await getRecipes();

  return (
    <div>
      <div className="text-center py-10">
        <h2>Our All Food Recipes</h2>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {recipes.map((recipe) => (
          <Recipe key={recipe.title} recipe={recipe} />
        ))}
        {recipes.map((recipe) => (
          <Recipe key={recipe.title} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
