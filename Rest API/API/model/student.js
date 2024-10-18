const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name : String,
    email : String,
    phone : Number,
    gender : String
});


const Student = mongoose.model('Student',studentSchema);

module.exports = Student;