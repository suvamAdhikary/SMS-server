const express = require('express');

const router = express.Router();

const Contest = require('../models/contest.model');

const curdController = require('./curd.controller');

router.post('', curdController.post(Contest));
router.get('', curdController.get(Contest));
router.get('/:id', curdController.getOne(Contest));
router.patch('/:id', curdController.updateOne(Contest));
router.delete('/:id', curdController.deleteOne(Contest));

module.exports = router;