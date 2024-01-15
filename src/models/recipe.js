import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    title: String,
    image: String,
    instructions: String,
    ingredients: [String]
});

export default mongoose.models.recipes || mongoose.model('recipes', recipeSchema);