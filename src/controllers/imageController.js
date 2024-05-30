const upload = require('../helpers/cloudinary')


const imageController = {
    uploadImage: async (req, res) => {
        try {

            const imageUrl = req.body.url

            const imageArray = imageUrl.split('/')

            const imageName = imageArray[imageArray.length - 1]

           const response = await upload(imageUrl, imageName)

           res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = imageController;