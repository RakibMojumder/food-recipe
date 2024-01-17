import Image from "next/image";
import { useRouter } from "next/navigation";

const Recipe = ({ recipe }) => {
  const router = useRouter();

  return (
    <div className="border rounded">
      <Image
        src={recipe?.image}
        alt="recipe image"
        width={400}
        height={400}
        className="w-full h-[140px] object-cover rounded-t"
      />
      <div className="p-2">
        <h2 className="mb-5 font-semibold">{recipe.title}</h2>
        <button
          onClick={() => router.push(`/recipe/${recipe._id}`)}
          className="w-full py-1.5 bg-primary rounded font-medium"
        >
          See Details
        </button>
      </div>
    </div>
  );
};

export default Recipe;
