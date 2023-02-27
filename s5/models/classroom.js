const mongoose = require('mongoose')

const class_room_schema = new mongoose.Schema({
    name : String,
    student_number : Number,
    modules : [String]
});

const ClassRoom = mongoose.model('ClassRoom',class_room_schema);

module.exports.ClassRoom = ClassRoom;