const mongoose = require('mongoose')

const db = () => {
    try {
        const url = process.env.MONGODB_URI

        console.log(url)

        mongoose.connect(url);
        mongoose.connection.once("open", () => {
          console.log("connected to database");
        });
    } catch (error) {
        console.log("error connecting to database")
    }
}

module.exports = db