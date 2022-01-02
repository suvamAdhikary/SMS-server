const express = require('express');

var cors = require('cors');

const { body } = require('express-validator');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());


const studentController = require('./controllers/student.controller');
const contestController = require('./controllers/contest.controller');
const adminController = require('./controllers/admin.controller');

const { adminLogin, studentLogin } = require('./controllers/auth.controller');


app.use('/students', studentController);
app.use('/contests', contestController);
app.use('/admins', adminController);



app.post('/adminlogin',
    body('email').isEmail().withMessage('Email is required and should be a valid email'),
    body('email').custom(val => {
        // console.log(val, val.indexOf('@masaischool.com'));
        if(val.indexOf('@masaischool.com') === -1)
            return Promise.reject('Restricted to admins only')
    }),
    body('password').isStrongPassword().withMessage('Wrong Password'),
    adminLogin);


app.post('/studentlogin',
    body('email').isEmail().withMessage('Email is required and should be a valid email'),
    body('password').isStrongPassword().withMessage('Wrong Password'),
    studentLogin);



app.get('/', async (req, res) => {

    try {

        res.status(200).send('Welcome to Student Management System');

    } catch (err) {

        res.status(400).send(err);
    }
})


module.exports = app;