const { Category } = require("../models/models")



const CategoryController = {

    //get all jobs
    getCategories: async(req, res) => {
        try {
            const categories = await Category.find()
            if (categories.length > 0) {
                res.status(200).json(categories)
            } else {
                res.status(404).json("No category found")
            }
        } catch (error) {
            res.status(500).json(error)
            
        }
        
    },

    //get one job
    getCategory: async(req, res) => {
       
       try {
         const category = await Category.findOne({_id: req.params.id})
            if (category) {
                res.status(200).json(category)
            } else {
                res.status(404).json("No category found")
            }
       } catch (error) {
        res.status(500).json(error)
       }
    },

    //create category
    createCategory: async(req, res) => {
        try {
             const category = await Category.create(req.body)
             console.log(category)
            if (category) {
                res.status(200).json(category)
            } else {
                res.status(500).json("Something went wrong")
            }
        } catch {
            res.status(500).json(error)
        }
    },

    //update category
    updateCategory: async(req, res) => {
       try {
        
         const category = await Category.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
         console.log(category)
            if (category) {
                res.status(200).json(category)
            } else {
                res.status(500).json("An error occurred")
            }
       } catch (error) {
        res.status(500).json(error)
       }
    },

    //delete category
    deleteCategory: async(req, res) => {
       try {
         const category = await Category.findOneAndDelete({_id: req.params.id})
            if (category) {
                res.status(200).json(category)
            } else {
                res.status(500).json("An error occurred")
            }
       } catch (error) {
        res.status(500).json(error)
       }
    }
}

module.exports = CategoryController