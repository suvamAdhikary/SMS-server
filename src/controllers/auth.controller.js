const jwt = require('jsonwebtoken');

const { validationResult } = require('express-validator');

require('dotenv').config();

const Admin = require('../models/admin.model');

const Student = require('../models/student.model');

const { JWT_SECRET_KEY } = process.env;

const newToken = user => {
    return jwt.sign({user}, JWT_SECRET_KEY);
}


const adminLogin = async (req, res, next) => {

    const errors = validationResult(req);
    // console.log(errors.errors);
    let finalErrors = null;
    let check = errors?.errors.length === 1 && errors?.errors[0].msg === 'Invalid value';
    // console.log("check", check);
    if(!errors.isEmpty() & !check) {
        finalErrors = errors.array().map(err => {
            // console.log("here", err);
            return {
                param: err.param,
                msg: err.msg,
            };
        });
        return res.status(400).json({errors: finalErrors});
    };

    try{

        const user = await Admin.findOne({email: req.body.email});
        // console.log("user", user);

        if(!user) return res.status(401).json({status: "failed", message: "Your email or password does not match"});

        const match = await Admin.checkPassword(req.body.password, user.password);

        if(!match) return res.status(401).json({status: "failed", message: "Your email or password does not match"});

        const token = newToken(user);
        // console.log('final', match, user, token);
        return res.status(200).json({user, token});

    } catch (err) {
        return res
            .status(500)//.send(err.message)
            .json({message: "Sorry for the inconvenience, please try again later"});
    }
}

const studentLogin = async (req, res, next) => {

    const errors = validationResult(req);
    let finalErrors = null;if(!errors.isEmpty()){
        finalErrors = errors.array().map(err => {
            return {
                param: err.param,
                msg: err.msg,
            };
        });
        return res.status(400).json({errors: finalErrors});
    };

    try{

        const user = await Student.findOne({email: req.body.email});

        if(!user) return res.status(401).json({status: "failed", message: "Your email or password does not match"});

        const match = await Student.checkPassword(req.body.password, user.password);

        if(!match) return res.status(401).json({status: "failed", message: "Your email or password does not match"});

        const token = newToken(user);

        return res.status(200).json({user, token});

    } catch (err) {
        return res
            .status(500)
            .json({message: "Sorry for the inconvenience, please try again later"});
    }
}

module.exports = {
    adminLogin,
    studentLogin
}