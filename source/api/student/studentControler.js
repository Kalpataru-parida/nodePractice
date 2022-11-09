const Student = require("../../models/student");


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

     // find all student documents

const allStudentList = async (req, res, next) => {
    try{
        const { rollNo } = req.query;

        const student = await Student.find();

        return res.status(200).json(student);
    }
    catch {
        console.log(err);
        return res.status(500).json(err);
    }
};

    // get one student documents 

const getOneStudent = async (req, res, next) => {
    try{
        const { rollNo } = req.query;
        if( rollNo === "" ){
            return res.status(400).json({error:"Id Value can'nt be Empty"});
        }
        const student = await Student.findOne({rollNo});

        return res.status(200).json(student);
    }
    catch {
        console.log(err);
        return res.status(500).json(err);
    }
};

    // delete one student documents 

const deleteStudent = async (req, res, next) => {
    try{
        const { rollNo } = req.body;
        if( rollNo === "" ){
            return res.status(400).json({error:"RollNo Value cann't Empty String"});
        }

        const student = await Student.deleteOne({rollNo});

        return res.status(200).json(student);
    }
    catch {
        console.log(err);
        return res.status(500).json(err);
    }
};

    // update student documents field

    const updateStudent = async (req, res, next) => {
        try {
          const { rollNo} = req.body;
          if(rollNo === ""){
            return res.status(400).json({error:"RollNo Value cann't Empty"});
        }
          let student = await Student.findOneAndUpdate({rollNo}, req.body);
           student = await Student.findOne({rollNo}); 
          return res.status(200).json(student);
        } 
        catch (err) {
          console.log(err);
          return res.status(500).json(err);
        }
      };


    // check how many student are in perticular standards  by using array length

const filterClassStudent = async (req,res,next) => {
    try{
       const { standard } = req.query;
       if(standard === ""){
        return res.status(400).json({error:"Standard Value cann't Empty"});
    }
        const student = await Student.find({standard});
       const response = {totalNumberOfStudent:student.length};
        return res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
   
};

    // filer student documents by perticular key name

const filterNameOfStudent = async (req,res,next) =>  {
    try{
         
        const { name } = req.query; 
        if(name === ""){
            return res.status(400).json({error:"Name Value cann't Empty String"});
        }

        const student = await Student.find({name: { $regex: name , $options: '<i>' }});
        return res.status(200).json(student);
          
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
};


module.exports = {
    createStudent,
    getOneStudent,
    allStudentList,
    deleteStudent,
    updateStudent,
    filterClassStudent,
    filterNameOfStudent
};