import dbConnect from "@/config/dbConnect";
import Recipe from "@/models/recipe";

export const getRecipes = async () => {
    await dbConnect();
    const data = await Recipe.find({});
    return data;
};

export const getRecipe = async (id) => {
    await dbConnect();
    const data = await Recipe.findById(id);
    return data;
}