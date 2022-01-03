const express = require('express');

const router = express.Router();

const Contest = require('../models/contest.model');

const curdController = require('./curd.controller');

router.post('', async (req, res) => {

    let payload = req.body;

    let temp = payload.tags;

    temp = temp.trim().split(",");
    for(let i = 0; i < temp.length; i++) {
        temp[i] = temp[i].trim();
    }

    payload.tags = temp;

    try{

        const contest = await Contest.create(payload);

        return res.status(201).json(contest);

    }
    catch (err){
        return res.status(400).json({ERROR: err.message});
    }

});

router.get('', curdController.get(Contest));
router.get('/:id', curdController.getOne(Contest));
router.patch('/:id', curdController.updateOne(Contest));
router.delete('/:id', curdController.deleteOne(Contest));

module.exports = router;