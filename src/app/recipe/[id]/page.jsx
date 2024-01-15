import { getRecipe } from "@/lib/getRecipes";
import Image from "next/image";

const RecipeDetails = async ({ params }) => {
  const recipe = await getRecipe(params.id);

  return (
    <div className="w-1/2 mx-auto mt-10 border p-4 rounded-md">
      <Image
        src={recipe.image}
        alt="recipe image"
        height={400}
        width={500}
        className="w-full h-[400px] rounded"
      />
      <div className="space-y-6 mt-5">
        <h2 className="text-2xl font-semibold">{recipe.title}</h2>
        <div>
          <h4 className="text-lg font-semibold">Ingredients:</h4>
          <ul className="list-disc list-inside marker:text-primary">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Instructions:</h4>
          <p className="text-black">{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
