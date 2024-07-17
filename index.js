const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");

const db = require("./src/helpers/db");
const { userRouter } = require("./src/routes/userRouter");
const { jobRouter } = require("./src/routes/jobRouter");
const { CategoryRouter } = require("./src/routes/categoryRoutes");
const { imageRouter } = require("./src/routes/imageRoutes");
const { notificationRouter } = require("./src/routes/notificationRouter");
const { RecruitmentRouter } = require("./src/routes/recruitmentRoutes");

dotenv.config();

const app = express();

app.use(cors());
const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db();

const storage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, './uploads')
  },
  filename: function(req, file, cb){
    cb(null, file.originalname)
  }
})

const upload = multer({storage})



app.post('/api/upload', upload.single('image'), (req, res)=>{
  console.log(req.file)
  res.json(req.file)
})

app.use(userRouter);
app.use(jobRouter);
app.use(CategoryRouter)
app.use(imageRouter);
app.use(notificationRouter);
app.use(RecruitmentRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
