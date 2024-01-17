import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const recipeApi = createApi({
    reducerPath: 'recipeAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://food-recipe-psi-three.vercel.app/api",
    }),
    tagTypes: ['Recipes', 'Recipe'],
    endpoints: (builder) => ({
        getRecipes: builder.query({
            query: () => '/recipe',
            providesTags: ['Recipes']
        }),

        getRecipe: builder.query({
            query: id => `/recipe/${id}`,
            providesTags: ['Recipe']
        }),

        getSearchRecipe: builder.query({
            query: (searchValue) => `/recipe?search=${searchValue}`
        }),

        addRecipe: builder.mutation({
            query: (body) => ({
                url: '/recipe',
                method: 'POST',
                body
            }),
            invalidatesTags: ['Recipes']
        }),

        updateRecipe: builder.mutation({
            query: ({ id, payload }) => ({
                url: `/recipe/${id}`,
                method: "PUT",
                body: payload,
            }),
            invalidatesTags: ['Recipes', 'Recipe']
        }),

        deleteRecipe: builder.mutation({
            query: (id) => ({
                url: `/recipe/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Recipes']
        })
    })
});

export const { useGetRecipesQuery, useGetRecipeQuery, useGetSearchRecipeQuery, useAddRecipeMutation, useDeleteRecipeMutation, useUpdateRecipeMutation } = recipeApi;

export default recipeApi;