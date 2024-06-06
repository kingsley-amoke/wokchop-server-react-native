const {Notification} = require('../models/models')



const NotificationController = {
    //create a new Notification

    createNotification: async (req, res) => {
    
        try {
            const notification = await Notification.create(req.body)
            res.status(201).json(notification)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //get all notifications

    getNotifications: async (req, res) => {
        try {
            const notifications = await Notification.find()
            res.status(200).json(notifications)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //get one notification

    getNotification: async (req, res) => {
        try {
            const notification = await Notification.findOne({_id: req.params.id})
            res.status(200).json(notification)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //update a notification

    updateNotification: async (req, res) => {
        try {
            const notification = await Notification.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            res.status(200).json(notification)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //delete a notification

    deleteNotification: async (req, res) => {
        try {
            const notification = await Notification.findOneAndDelete({_id: req.params.id})
            res.status(200).json(notification)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports  = NotificationController