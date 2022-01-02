const mongoose = require('mongoose');

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


const contestSchema = mongoose.Schema({
    title: reqStringT,
    type: reqStringT,
    deadline: reqStringT,
    time: reqStringF,
    tags: [reqStringF]
}, {
    versionKey: false,
    timestamp: true,
});

const Contest = mongoose.model("contest", contestSchema);

module.exports = Contest;