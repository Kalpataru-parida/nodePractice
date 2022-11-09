const express = require("express");
const router = express.Router();

const {
    createTeacher,
    getAllTeacher,
    getOneTeacher,
    deleteTeacher,
    updateTeacher,
    updateStandardFromArray,
    removeStandardFromArray,
    vaccinatedTeacher
} = require("./teacherControler");

router.post("/",createTeacher);
router.get("/all",getAllTeacher);
router.get("/",getOneTeacher);
router.delete("/",deleteTeacher);
router.put("/",updateTeacher);
router.put("/updateStandard",updateStandardFromArray);
router.put("/removeStandard",removeStandardFromArray);
router.put("/vaccinatedTeacher",vaccinatedTeacher);


module.exports = router;