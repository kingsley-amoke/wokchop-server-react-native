const { Router } = require('express')
const CategoryController = require('../controllers/categoryControllers')

const router = Router()

//get all categories
router.get("/api/category", CategoryController.getCategories);

//get category by id
router.get("/api/category/:id", CategoryController.getCategory);

//create a new category
router.post("/api/category/create", CategoryController.createCategory);

//update a category
router.put("/api/category/update/:id", CategoryController.updateCategory);

//update a category job field
router.put("/api/category/update/jobs/:id", CategoryController.addJob);


//delete a category
router.delete("/api/users/category/:id", CategoryController.deleteCategory);




module.exports.CategoryRouter = router;