const express = require('express');

const router = express.Router();

const Admin = require('../models/admin.model');

const curdController = require('./curd.controller');

router.post('', curdController.post(Admin));
router.get('', curdController.get(Admin));
router.get('/:id', curdController.getOne(Admin));
router.patch('/:id', curdController.updateOne(Admin));
router.delete('/:id', curdController.deleteOne(Admin));

module.exports = router;