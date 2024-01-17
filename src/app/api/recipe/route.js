import { NextResponse } from "next/server";
import Recipe from "@/models/recipe";
import dbConnect from "@/config/dbConnect";
import { uploadImage } from "@/lib/imageUpload";
const { v2: cloudinary } = require('cloudinary');

// CONFIG CLOUDINARY
cloudinary.config({
    cloud_name: process.env.CLOUDE_NAME,
    api_key: process.env.CLOUDE_API_KEY,
    api_secret: process.env.CLOUDE_API_SECRET
});

export const GET = async (request) => {
    try {
        dbConnect();
        const searchParams = request.nextUrl.searchParams.get('search')
        let recipe;
        if (searchParams) {
            recipe = await Recipe.find({
                $or: [
                    { title: new RegExp(searchParams, "i") },
                    { ingredients: new RegExp(searchParams, "i") }
                ]
            })
        } else {
            recipe = await Recipe.find({});
        }

        return NextResponse.json(recipe)

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message })
    }
};

export const POST = async (request) => {
    try {
        dbConnect();
        const { title, instructions, ingredients, image } = await request.json();
        if (!title || !instructions || !image) {
            throw Error('All field are required')
        }

        if (ingredients.length == 0) {
            throw Error('All field are required')
        }

        const url = await uploadImage(image);
        await Recipe.create({ title, instructions, ingredients, image: url })

        return NextResponse.json({ success: true, msg: 'Recipe added successfully' })

    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: err.message })
    }
};
