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


const adminSchema = moongoose.Schema({
    email: {type: String, required: true, unique: true},
    name: reqStringT,
    city: reqStringT,
    age: reqNumberT,
    gender: reqStringF,
    contact: reqStringT,
}, {
    versionKey: false,
    timestamp: true,
});

const Admin = moongoose.model("admin", adminSchema);

module.exports = Admin;