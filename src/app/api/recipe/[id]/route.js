import { NextResponse } from "next/server";
import Recipe from '@/models/recipe'
import { uploadImage } from "@/lib/imageUpload";

export const GET = async (request, { params }) => {
    try {
        const data = await Recipe.findById(params.id);
        return NextResponse.json(data)
    } catch (error) {
        console.log(err);
        return NextResponse.json({ error: err.message })
    }
}

export const DELETE = async (request, { params }) => {
    try {
        await Recipe.findByIdAndDelete(params.id);
        return NextResponse.json({ success: true, msg: 'Successfully deleted the recipe' })
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: err.message })
    }
}

export const PUT = async (request, { params }) => {
    try {
        const { title, instructions, ingredients, image } = await request.json();
        if (!title || !instructions) {
            throw Error('All field are required')
        }

        if (ingredients.length == 0) {
            throw Error('All field are required')
        }

        if (image) {
            const url = await uploadImage(image);
            await Recipe.findByIdAndUpdate(params.id, { title, instructions, ingredients, image: url })
            return NextResponse.json({ msg: 'Successful' })
        } else {
            await Recipe.findByIdAndUpdate(params.id, { title, instructions, ingredients })
            return NextResponse.json({ msg: 'Successful' })
        }

    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: err.message })
    }
}