const express = require('express');

var cors = require('cors');

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get('/', async (req, res) => {

    try {

        res.status(200).send('Welcome to Student Management System');

    } catch (err) {

        res.status(400).send(err);
    }
})

module.exports = app;