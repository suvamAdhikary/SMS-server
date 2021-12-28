const moongoose = require('mongoose');

const reqStringT = {
    type: String,
    required: true,
}

const reqStringF = {
    type: String,
    required: false,
}

const reqNumberT = {
    type: Number,
    required: true,
}

const reqNumberF = {
    type: Number,
    required: false,
}


const studentSchema = moongoose.Schema({
    name: reqStringT,
    city: reqStringT,
    age: reqNumberT,
    education: reqStringT,
    gender: reqStringF,
    contact: reqStringT,
}, {
    versionKey: false,
    timestamp: true,
});

const Student = moongoose.model("student", studentSchema);

module.exports = Student;