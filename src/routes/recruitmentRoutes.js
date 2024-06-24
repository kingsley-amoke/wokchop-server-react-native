const { Router } = require("express");

const RecruitmentController = require("../controllers/RecruitmentControllers");

const router = Router();

//get all Recruitments
router.get("/api/Recruitments", RecruitmentController.getRecruitments);

//get Recruitment by id
router.get("/api/Recruitments/:id", RecruitmentController.getRecruitment);

//create a new Recruitment
router.post("/api/Recruitments/create", RecruitmentController.createRecruitment);

//update a Recruitment
router.put("/api/Recruitments/update/:id", RecruitmentController.updateRecruitment);

//delete a Recruitment
router.delete("/api/Recruitments/delete/:id", RecruitmentController.deleteRecruitment);

module.exports.RecruitmentRouter = router;
