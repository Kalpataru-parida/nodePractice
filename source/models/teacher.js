const { model,Schema } = require('mongoose');

const teacherInfo = new Schema({
 name: String,
 id:{
    type: Number,
    unique: true
 },
 gender: String,
 age: Number,
 phone: Number,
 standard:[String],
 vaccinated: Boolean,
 createdAt: String
});

module.exports = model("teachers",teacherInfo);
