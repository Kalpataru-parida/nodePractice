const { model,Schema } = require('mongoose');

const studentInfo = new Schema({
 name: {
    type: String
 },
 password: String,
 email:{
    type: String,
    unique: true
 },
 phone: Number,
 address: String,
 rollNo: {
    type: String,
    unique: true
 },
 standard: Number,
 state: String,
 nationality: String,
 createdAt: String
});

module.exports = model("student",studentInfo);

