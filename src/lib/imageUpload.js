const { v2: cloudinary } = require('cloudinary');

// CONFIG CLOUDINARY
cloudinary.config({
    cloud_name: process.env.CLOUDE_NAME,
    api_key: process.env.CLOUDE_API_KEY,
    api_secret: process.env.CLOUDE_API_SECRET
});


export const uploadImage = async (image) => {
    try {
        const data = await cloudinary.uploader.upload(image);
        return data.url;
    } catch (error) {
        console.log(error.message);
    }
}