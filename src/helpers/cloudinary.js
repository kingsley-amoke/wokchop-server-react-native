const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const upload = async (imageUrl, imageName) => {
   try{
    const data = await cloudinary.uploader.upload(
        imageUrl,
        { public_id: imageName },
        function (error, result) {
         if(!error) return result

         return error;
        }
      );

      return data
   }catch(error){
     return error;
   }
      
}

module.exports = upload;