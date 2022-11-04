const Student = require("../../models/student");

// create student documents


const createStudent = async (req, res, next) => {
    try{
        const {name,password,email,phone,address,rollNo,standard,state,nationality} = req.body;  //which will be get from frontend side
        const newStudent = {
            name,
            password,
            email,
            phone,
            address,
            rollNo,
            standard,
            state,
            nationality,
            createdAt: new Date().toISOString(),
        };

        const student = await Student.create(newStudent);

        return res.status(200).json(student);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
};


// get student documents by findone


const getStudent = async (req, res, next) => {
    try{
        const { rollNo } = req.query;

        const student = await Student.findOne({address:'paris'});

        return res.status(200).json(student);
    }
    catch {
        console.log(err);
        return res.status(500).json(err);
    }
}

// find list of student documents


const allStudentList = async (req, res, next) => {
    try{
        const { rollNo } = req.query;

        const student = await Student.find({});

        return res.status(200).json(student);
    }
    catch {
        console.log(err);
        return res.status(500).json(err);
    }
}


// delete student documents filed


const deleteStudent = async (req, res, next) => {
    try{
        const { rollNo } = req.body;

        const student = await Student.deleteOne({address:'chicago'});

        return res.status(200).json(student);
    }
    catch {
        console.log(err);
        return res.status(500).json(err);
    }
}


// update student documents field


const updateStudent = async (req, res, next) => {
    try{
        const { rollNo } = req.body;

        const student = await Student.updateOne({name:'sam'},{address:'canbera'});

        return res.status(200).json(student);
    }
    catch {
        console.log(err);
        return res.status(500).json(err);
    }
}

// find and update student documents

const findAndUpdateStudent = async (req, res, next) => {
    try{
        
        const filter = { name:'mona' };
        const update = { state:'sk' };

        let stdstate = await Student.findOneAndUpdate(filter,update,{
            new:true
        });

        stdstate.name;
        stdstate.password;
        return res.status(200).json(stdstate);
    }
    catch {
        console.log(err);
        return res.status(500).json(err);
    }
}


module.exports = {createStudent,getStudent,allStudentList,deleteStudent,updateStudent,findAndUpdateStudent};