const { Router } = require("express");

const JobController = require("../controllers/jobControllers");
const { authenticateToken } = require("../auth/token");

const router = Router();

//get all jobs
router.get("/api/jobs", JobController.getJobs);

//get job by id
router.get("/api/jobs/:id", JobController.getJob);

//create a new job
router.post("/api/jobs/create", JobController.createJob);

//update a job
router.put("/api/jobs/update/:id", JobController.updateJob);

//delete a job
router.delete("/api/jobs/delete/:id", JobController.deleteJob);

module.exports.jobRouter = router;
