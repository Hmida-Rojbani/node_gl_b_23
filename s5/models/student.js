const mongoose = require('mongoose')
const Joi = require('joi')
const uniqueValidator = require('mongoose-unique-validator');
const student_schema = new mongoose.Schema({
    name : String,
    inscriptionDate : {
        type : Date,
        default : Date.now()
    },
    age : Number,
    active: {
        type:Boolean,
        default: false},
    payementAmount: Number,
    email : {
        type : String,
        unique: true, 
        required: true 
    }
    // adress : {
    //     street : String,
    //     city: String
    // }
});
student_schema.plugin(uniqueValidator)
const validation_schema = Joi.object({
    name : Joi.string().min(5).max(50).required(),
    inscriptionDate :Joi.date().iso(),
    age : Joi.number().integer().positive().required(),
    active: Joi.boolean(),
    payementAmount: Joi.number().positive(),
    email : Joi.string().email({minDomainSegments:2,tlds:{deny : ['tn']}}).required(),
    // adress : {
    //     street : Joi.string(),
    //     city: Joi.string()
    // }
}).with('active','payementAmount')
student_schema.methods.validate_body = function (body) {
    return validation_schema.validate(body);
}
const Student = mongoose.model('Student',student_schema);
module.exports.Student=Student;