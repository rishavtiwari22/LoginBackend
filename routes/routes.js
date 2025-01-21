const express = require('express');
const router = express.Router()
const Model = require('../model/model');

module.exports = router;

// Post Method
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        isAdmin: req.body.isAdmin
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
    try{
        const data = await Model.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// Get by ID Method
router.get('/getOne/:id',async (req, res)=>{
    try{
        const data = await Model.findById(req.params.id);
        res.json(data)
    }
    catch(error){
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
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
