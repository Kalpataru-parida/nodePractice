const express = require("express");
const router = express.Router();
const {createStudent,getStudent,allStudentList,deleteStudent,updateStudent,findAndUpdateStudent}= require("./studentControler");

router.post("/hi",createStudent);
router.get("/",getStudent);
router.get("/all",allStudentList);
router.delete("/",deleteStudent);
router.put("/",updateStudent);
router.put("/fu",findAndUpdateStudent);



module.exports = router;
