const express = require("express");
const router = express.Router();
const {
    createStudent,
    allStudentList,
    getOneStudent,
    deleteStudent,
    updateStudent,
    filterClassStudent,
    filterNameOfStudent
}= require("./studentControler");

router.post("/",createStudent);
router.get("/all",allStudentList);
router.get("/",getOneStudent);
router.delete("/",deleteStudent);
router.put("/",updateStudent);
router.get("/totalNumberOfStudent",filterClassStudent);
router.get("/filterNameOfStudent",filterNameOfStudent);


module.exports = router;
