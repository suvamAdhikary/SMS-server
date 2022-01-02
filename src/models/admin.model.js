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


const adminSchema = mongoose.Schema({
    email: {type: String, required: true, unique: true},
    password: reqStringT,
    name: reqStringT,
    city: reqStringT,
    age: reqNumberT,
    gender: reqStringF,
    contact: reqStringT,
}, {
    versionKey: false,
    timestamp: true,
});


adminSchema.pre('save', function(next) {
    if(! this.isModified('password')) return next();

    const hash = bcrypt.hashSync(this.password, 8);

    this.password = hash;

    next();
})


adminSchema.statics.checkPassword = function(password, hash) {

    // console.log('in check pass', password, hash);

    const match = bcrypt.compareSync(password, hash);
    
    // console.log('out check pass admin model', password, match);
    
    return match;
}


const Admin = mongoose.model("admin", adminSchema);

module.exports = Admin;