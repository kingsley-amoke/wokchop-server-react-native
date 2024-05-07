
const bcrypt = require('bcrypt')

const { User } = require("../models/models");
const { generateAccessToken } = require('./token');

//login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email: email })
        if (!user) return res.status(404).json('User not found')

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) return res.status(401).json('Invalid password')
        
        const token = generateAccessToken(user)

        res.status(200).json(token)

    } catch (error) {
        console.log(error)
    }
}

module.exports = loginUser;