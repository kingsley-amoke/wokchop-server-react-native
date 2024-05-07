const { Job } = require("../models/models")



const JobController = {

    //get all jobs
    getJobs: async(req, res) => {
        try {
            const jobs = await Job.find()
            if (jobs.length > 0) {
                res.status(200).json(jobs)
            } else {
                res.status(404).json("No jobs found")
            }
        } catch (error) {
            res.status(500).json(error)
            
        }
        
    },

    //get one job
    getJob: async(req, res) => {
       try {
         const job = await Job.findById()
            if (job.length > 0) {
                res.status(200).json(job)
            } else {
                res.status(404).json("No jobs found")
            }
       } catch (error) {
        res.status(500).json(error)
       }
    },
    createJob: async(req, res) => {
        try {
             const job = await Job.create(req.body)
            if (job.length > 0) {
                res.status(200).json(job)
            } else {
                res.status(500).json("Something went wrong")
            }
        } catch {
            res.status(500).json(error)
        }
    },
    updateJob: async(req, res) => {
       try {
         const job = await Job.findByIdAndUpdate(req.body)
            if (job.length > 0) {
                res.status(200).json(job)
            } else {
                res.status(500).json("An error occurred")
            }
       } catch (error) {
        res.status(500).json(error)
       }
    },
    deleteJob: async(req, res) => {
       try {
         const job = await Job.findByIdAndDelete()
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

module.exports = JobController