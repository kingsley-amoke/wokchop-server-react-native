const { Category } = require("../models/models")



const CategoryController = {

    //get all jobs
    getCategories: async(req, res) => {
        try {
            const categories = await Category.find()
            if (jobs.length > 0) {
                res.status(200).json(jobs)
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
         const job = await Category.findById()
            if (job.length > 0) {
                res.status(200).json(job)
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
             const job = await Category.create(req.body)
            if (job.length > 0) {
                res.status(200).json(job)
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
         const job = await Category.findByIdAndUpdate(req.body)
            if (job.length > 0) {
                res.status(200).json(job)
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
         const job = await Category.findByIdAndDelete()
            if (job.length > 0) {
                res.status(200).json(job)
            } else {
                res.status(500).json("An error occurred")
            }
       } catch (error) {
        res.status(500).json(error)
       }
    }
}

module.exports = CategoryController