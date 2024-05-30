const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./src/helpers/db");
const UserController = require("./src/controllers/userController");
const { userRouter } = require("./src/routes/userRouter");
const { jobRouter } = require("./src/routes/jobRouter");
const { generateAccessToken } = require("./src/auth/token");
const { CategoryRouter } = require("./src/routes/categoryRoutes");
const upload = require("./src/helpers/cloudinary");
const { imageRouter } = require("./src/routes/imageRoutes");

dotenv.config();

const app = express();

app.use(cors());
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// db();
upload()

app.use(userRouter);
app.use(jobRouter);
app.use(CategoryRouter)
app.use(imageRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
