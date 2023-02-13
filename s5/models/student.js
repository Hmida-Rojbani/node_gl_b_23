const mongoose = require('mongoose')
const student_schema = new mongoose.Schema({
    name : String,
    inscriptionDate : {
        type : Date,
        default : Date.now()
    },
    age : Number,
    active: Boolean,
    payementAmount: Number
});
const Student = mongoose.model('Student',student_schema);
module.exports.Student=Student;