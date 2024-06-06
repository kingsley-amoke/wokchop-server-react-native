const {Router} = require('express')
const NotificationController = require('../controllers/notificationControllers')

const router = Router()

//get all notifications
router.get('/api/notifications', NotificationController.getNotifications)

//get notification by id
router.get('/api/notifications/:id', NotificationController.getNotification)

//create a new notification
router.post('/api/notifications/create', NotificationController.createNotification)

//update a notification
router.put('/api/notifications/update/:id', NotificationController.updateNotification)

//delete a notification
router.delete('/api/notifications/delete/:id', NotificationController.deleteNotification)

module.exports.notificationRouter = router