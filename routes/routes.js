const express = require('express');
const router = express.Router()
const Model = require('../model/model');

module.exports = router;

// Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        campus: req.body.campus,
        date: req.body.date,  
        house: req.body.house,
        point: req.body.point,
        rewards: req.body.rewards,
        amount: req.body.amount
    })
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
});

// Get all Method
router.get('/getAll', async (req, res) => {
    try {
        const data = await Model.find();
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Get by ID Method
router.get('/getOne/:id', async (req, res) => {
    try {
        const data = await Model.findById(req.params.id);
        if (!data) {
            return res.status(404).json({message: 'Record not found'})
        }
        res.json(data)
    }
    catch (error) {
        res.status(500).json({message: error.message})
    }
})

// Update Method
router.patch('/update/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updates = req.body;
        const options = { new: true };

        const data = await Model.findByIdAndUpdate(id, updates, options);
        
        if (!data) {
            return res.status(404).json({ message: 'Record not found' });
        }
        
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        if (!data) {
            return res.status(404).json({message: 'Record not found'})
        }
        res.json({message: `Document with ID ${id} has been deleted`})
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})