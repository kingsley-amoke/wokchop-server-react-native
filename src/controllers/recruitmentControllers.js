const { Recruitment } = require("../models/models")



const RecruitmentController = {

    //get all Recruitments
    getRecruitments: async(req, res) => {
        try {
            const Recruitments = await Recruitment.find()
            if (Recruitments.length > 0) {
                res.status(200).json(Recruitments)
            } else {
                res.status(404).json("No Recruitments found")
            }
        } catch (error) {
            res.status(500).json(error)
            
        }
        
    },

    //get one Recruitment
    getRecruitment: async(req, res) => {
       try {
         const Recruitment = await Recruitment.findOne({_id:req.params.id})
            if (Recruitment) {
                res.status(200).json(Recruitment)
            } else {
                res.status(404).json("No Recruitments found")
            }
       } catch (error) {
        res.status(500).json(error)
       }
    },
    createRecruitment: async(req, res) => {
        try {
          
             const Recruitment = await Recruitment.create(req.body)
            if (Recruitment) {
                res.status(200).json(Recruitment)
            } else {
                res.status(500).json("Something went wrong")
            }
        } catch {
            res.status(500)
        }
    },
    updateRecruitment: async(req, res) => {
       try {
         const Recruitment = await Recruitment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            if (Recruitment) {
                res.status(200).json(Recruitment)
            } else {
                res.status(500).json("An error occurred")
            }
       } catch (error) {
        res.status(500).json(error)
       }
    },
    deleteRecruitment: async(req, res) => {
       try {
         const Recruitment = await Recruitment.findOneAndDelete({_id: req.params.id})
            if (Recruitment) {
                res.status(200).json(Recruitment)
            } else {
                res.status(500).json("An error occurred")
            }
       } catch (error) {
        res.status(500).json(error)
       }
    }
}

module.exports = RecruitmentController
