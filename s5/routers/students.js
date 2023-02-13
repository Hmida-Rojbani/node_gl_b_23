const router = require('express').Router();
const {Student} = require('../models/student');

router.post('/',async (req, res) =>{
    let student = new Student(req.body);
    student = await student.save();
    res.status(201).send(student);
})

module.exports=router;