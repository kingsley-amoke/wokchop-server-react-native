const upload = require('../helpers/cloudinary')


const imageController = {
    uploadImage: async (req, res) => {
        try {

            const imageUrl = req.body.url
            const user = req.body.user
            const type = req.body.type

            const imageArray = imageUrl.split('/')

            const imageName = imageArray[imageArray.length - 1]

            const public_id = `${user}-${type}-${imageName}`

           const response = await upload(imageUrl, public_id)

           res.status(200).json(response)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = imageController;