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


const contestSchema = moongoose.Schema({
    title: reqStringT,
    type: reqStringT,
    deadline: reqStringT,
    time: reqStringF,
    tags: [reqStringF]
}, {
    versionKey: false,
    timestamp: true,
});

const Contest = moongoose.model("contest", contestSchema);

module.exports = Contest;