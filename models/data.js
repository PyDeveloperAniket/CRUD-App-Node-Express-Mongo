const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    course:{
        type:String,
        require:true
    },
    group:{
        type:String,
        require:true
    },
    batch:{
        type:String,
        require:true
    },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
