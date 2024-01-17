"use client";

import UpdateButton from "@/components/button/UpdateButton";
import DeleteButton from "@/components/button/DeleteButton";
import { useGetRecipeQuery } from "@/redux/api/recipeApi";
import Image from "next/image";
import RecipeDetailSkelton from "@/components/skelton/RecipeDetailSkelton";

const RecipeDetails = ({ params }) => {
  const { isLoading, data } = useGetRecipeQuery(params.id);

  if (isLoading) return <RecipeDetailSkelton />;

  return (
    <div className="lg:w-2/3 xl:w-1/2 mx-auto mt-10 border p-4 rounded-md">
      <Image
        src={data.image}
        alt="recipe image"
        height={400}
        width={500}
        className="w-full h-[400px] rounded"
      />
      <div className="space-y-6 mt-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold">{data.title}</h2>
          <div className="flex items-center gap-x-2">
            <UpdateButton recipe={data} />
            <DeleteButton recipe={data} />
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Ingredients:</h4>
          <ul className="list-disc list-inside marker:text-primary">
            {data.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Instructions:</h4>
          <p className="text-black">{data.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
