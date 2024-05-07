const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors  = require('cors')

const db = require('./helpers/db')
const UserController = require('./controllers/userController')
const { userRouter } = require('./routes/userRouter')
const { jobRouter } = require('./routes/jobRouter')
const { generateAccessToken } = require('./auth/token')

dotenv.config()

const app = express()

app.use(cors())
const PORT = process.env.PORT || 5001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

db();

app.use(userRouter)
app.use(jobRouter)



app.listen(PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

