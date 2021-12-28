const express = require('express');

const router = express.Router();

const Student = require('../models/student.model');

const curdController = require('./curd.controller');

router.post('', curdController.post(Student));
router.get('', curdController.get(Student));
router.get('/:id', curdController.getOne(Student));
router.patch('/:id', curdController.updateOne(Student));
router.delete('/:id', curdController.deleteOne(Student));

module.exports = router;