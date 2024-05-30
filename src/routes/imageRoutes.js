const {Router} = require('express')

const imageController = require('../controllers/imageController')

const router = Router()

router.post('/api/image/upload', imageController.uploadImage)

module.exports.imageRouter = router;