const { Router } = require('express')

const UserController = require('../controllers/userController')
const loginUser = require('../auth/login')


const router = Router()

//get all users
router.get("/api/users", UserController.getUsers);

//get user by id
router.get("/api/users/:id", UserController.getUserById);

//create a new user
router.post("/api/users/create", UserController.addUser);

//update a user
router.put("/api/users/update/:id", UserController.updateUser);

//update a user notification field
router.put("/api/users/update/notifications/:id", UserController.addJob);

//update a user job field
router.put("/api/users/update/jobs/:id", UserController.addJob);

//update password
router.put("/api/users/auth/password/:id", UserController.updatePassword);

//delete a user
router.delete("/api/users/delete/:id", UserController.deleteUser);




module.exports.userRouter = router;