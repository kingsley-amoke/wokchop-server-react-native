const mongoose = require('mongoose')

const db = () => {
    try {
        const url = process.env.MONGODB_URL;

        mongoose.connect(url);
        mongoose.connection.once("open", () => {
          console.log("connected to database");
        });
    } catch (error) {
        console.log("error connecting to database")
    }
}

module.exports = db