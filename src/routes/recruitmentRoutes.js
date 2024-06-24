const { Router } = require("express");

const RecruitmentController = require("../controllers/recruitmentControllers");

const router = Router();

//get all Recruitments
router.get("/api/recruitments", RecruitmentController.getRecruitments);

//get Recruitment by id
router.get("/api/recruitments/:id", RecruitmentController.getRecruitment);

//create a new Recruitment
router.post("/api/recruitments/create", RecruitmentController.createRecruitment);

//update a Recruitment
router.put("/api/recruitments/update/:id", RecruitmentController.updateRecruitment);

//delete a Recruitment
router.delete("/api/recruitments/delete/:id", RecruitmentController.deleteRecruitment);

module.exports.RecruitmentRouter = router;
