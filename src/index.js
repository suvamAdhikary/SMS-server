const express = require('express');

var cors = require('cors');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());


const studentController = require('./controllers/student.controller');
const contestController = require('./controllers/contest.controller');
const adminController = require('./controllers/admin.controller');


app.use('/students', studentController);
app.use('/contests', contestController);
app.use('/admins', adminController);


app.get('/', async (req, res) => {

    try {

        res.status(200).send('Welcome to Student Management System');

    } catch (err) {

        res.status(400).send(err);
    }
})

module.exports = app;