const Teacher = require("../../models/teacher");

let createTeacher = async (req,res,next) => {
    try{
        const {name,id,gender,age,phone,standard,vaccinated}= req.body;
        const newTeacher = {
            name,
            id,
            gender,
            age,
            phone,
            standard,
            vaccinated,
            createdAt: new Date().toISOString(),
        };

        const teacherdb = await Teacher.create(newTeacher);
        
        return res.status(200).json(teacherdb);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }    
};
    // get all teacher documents

const getAllTeacher = async (req,res,next) => {
    try{
        const {id} = req.query;
       
        const teacher = await Teacher.find({});

        return res.status(200).json(teacher);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    
}
};

    //  find teacher documents by id

  const getOneTeacher = async (req,res,next) => {
    try{
        const {id} = req.query;
        if( id === ""){
            return res.status(400).json({error:"Id value can'nt be empty"});
        }
        const teacher = await Teacher.findOne({id});
        return res.status(200).json(teacher);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
}
};

    // delete teacher documents

const deleteTeacher =  async (req,res,next) => {
    try{
        const {id} = req.body;
        if( id === ""){
            return res.status(400).json({error:"Id Value cann't be Empty"});
        }
        const teacher = await Teacher.deleteOne({id});

        return res.status(200).json(teacher);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    
}
};
   
   // update teacher document field

const updateTeacher = async (req, res, next) => {
    try {
        const { id } = req.body;
        if(id === ""){
            return res.status(400).json({error:"Id Value cann't be Empty"});
    }
        let teacher = await Teacher.findOneAndUpdate({id}, req.body);
        teacher = await Teacher.findOne({id}); 
            return res.status(200).json(teacher);
    } 
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  };

    //  update data from teacher's standard array 

const updateStandardFromArray = async (req,res,next) => {
    try{
        const {id} = req.body;
        if(id === ""){
            return res.status(400).json({error:"id cann't be empty"}); 
        }
        if(req.body.standard === ""){
            return res.status(400).json({error:"standard cann't be empty"});
        }

        let teacher = await Teacher.findOne({id});
        if(teacher.standard.find(el => el === req.body.standard) !== undefined
        ){
          return res.status(400).json({error:"this value is already exists"});

        }
 
        teacher = await Teacher.updateOne({ id },{$push:{standard:req.body.standard}});
                return res.status(200).json(teacher);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    
}
};

    // delete data's from teacher's standard array

const removeStandardFromArray = async (req,res,next) => {
    try{
        const {id} = req.body;
        if(id === ""){
            return res.status(400).json({error:"id cann't be empty"});
            
        }
        if(req.body.standard === ""){
            return res.status(400).json({error:"standard cann't be empty"});
        }
        const teacher = await Teacher.updateOne({ id },{$pull:{standard: req.body.standard}});
            return res.status(200).json(teacher);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
}
};

    // check the vaccinated status of teacher if their is no vaccination make them vaccinated

const vaccinatedTeacher = async ( req , res , next ) => {
    try{
        const { id,name , vaccinated }= req.body;
        if( id === "" || typeof id === "string" || name === "" || vaccinated === ""){
            return res.status(400).json({error:"input value can'nt be empty or a string"});
        }
        let student = await Teacher.findOneAndUpdate({id,name,},{vaccinated});
        student = await Teacher.findOne({id,name});
        return res.status(200).json(student);
    }
    catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
};


module.exports = {
    createTeacher,
    getAllTeacher,
    deleteTeacher,
    updateTeacher,
    updateStandardFromArray,
    getOneTeacher,
    removeStandardFromArray,
    vaccinatedTeacher
};
   