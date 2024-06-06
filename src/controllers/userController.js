const bcrypt = require('bcrypt');

const dotenv = require('dotenv');

dotenv.config();

const { User } = require('../models/models');
const { generateAccessToken } = require('../auth/token');




const UserController = {

    //get all users
    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            if (users.length > 0) {
                res.status(200).json(users);
            } else {
                res.status(404).json({ message: 'No users found' })
            }
        } catch (err) {
            res.status(500).json(err)
        }
    },

//get user by email

    getUserById: async (req, res) => {
        
        try {
            const user = await User.findOne({ email: req.params.id })
            if (!user) return res.status(404).json({ message: "This user does not exist" });
              
            res.status(200).json(user);
           
            
        } catch (error) {
            res.status(500).json(error)
        }
    },


    //create new user


    addUser: async (req, res) => {
        const { password } = req.body

        const salt = await bcrypt.genSalt(10);

        const hash = await bcrypt.hash(password, salt);

        const data = {
            ...req.body, password: hash 
        }

        try {
            const user = await User.create(data)
            if (user) {
              res.status(201).json(user);
            } else {
              res.status(500).json({ message: "Something went wrong" });
            }
        } catch (error) {
            res.status(500).json(error)
        }
    },


    //update user by email

    updateUser: async (req, res) => {

        try {
            const user = await User.findOneAndUpdate({ email: req.params.id},req.body,{new: true})

            if (user) {
                res.status(200).json(user)
            } else {
                res.status(500).json({ message: "Something went wrong" });
            }
        
        } catch (error) {
            res.status(500).json(error)
        }
    },

    //update notification field
addNotification: async(req, res) => {
    try {
        const user = await User.findOne({email: req.params.id})
        if (user) {

            if(!user.notifications) user.notifications = []
            
            user.notifications.push(req.body.notifications)
            await user.save()
            res.status(200).json(user)
        } else {
            res.status(500).json("An error occurred")
        }
    } catch (error) {
        res.status(500).json(error)
    }
},

//update job field
addJob: async(req, res) => {
    try {
        const user = await User.findOne({email: req.params.id})
        if (user) {
            user.jobs.push(req.body.jobs)
            await user.save()
            res.status(200).json(user)
        } else {
            res.status(500).json("An error occurred")
        }
    } catch (error) {
        res.status(500).json(error)
    }
},
    updatePassword: async (req, res) => {
        
        const { password } = req.body
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        try {
          const user = await User.findOneAndUpdate(
            { email: req.params.id },
              { password: hashedPassword },
            { new: true }
          );
          if (!user)  res.status(500).json({ message: "Something went wrong" });
        
     res.status(200).json(user);
          
        } catch (error) {
          res.status(500).json(error);
        }
    },

    //delete user by email

    deleteUser: async (req, res) => {
        try {
            const user = await User.findOneAndDelete(req.params.id)
             if (user) {
               res.status(200).json(user);
             } else {
               res.status(500).json({ message: "Something went wrong" });
             }
        } catch (error) {
            res.status(500).json(error)
        }
    },

    

   
}

module.exports = UserController