import { NextResponse } from "next/server";
import Recipe from "@/models/recipe";

export const GET = async (request) => {
    const searchParams = request.nextUrl.searchParams.get('search')

    const recipe = await Recipe.find({
        $or: [
            { title: new RegExp(searchParams, "i") },
            { ingredients: new RegExp(searchParams, "i") }
        ]
    })

    return NextResponse.json(recipe)
}