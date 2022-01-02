const mongoose = require('mongoose');

const bcrypt = require('bcryptjs');

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


const studentSchema = mongoose.Schema({
    name: reqStringT,
    city: reqStringT,
    age: reqNumberT,
    education: reqStringT,
    gender: reqStringF,
    contact: reqStringT,
    password: reqStringT,
}, {
    versionKey: false,
    timestamp: true,
});



studentSchema.pre('save', function(next) {
    if(! this.isModified('password')) return next();

    const hash = bcrypt.hashSync(this.password, 8);

    this.password = hash;

    next();
})


studentSchema.methods.checkPassword = function(password) {
    const match = bcrypt.compareSync(password, this.password);

    return match;
}



const Student = mongoose.model("student", studentSchema);

module.exports = Student;