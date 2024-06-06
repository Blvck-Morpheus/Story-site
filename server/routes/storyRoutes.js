const express = require('express');
const Story = require('../models/story');
const router = express.Router();

router.get('/', async (req, res) => {
    const stories = await Story.find().populate('comments');
    res.json(stories);
});

router.post('/', async (req, res) => {
    const { title, author, content } = req.body;
    const newStory = new Story({ title, author, content });
    await newStory.save();
    res.status(201).json(newStory);
});

router.get('/:id', async (req, res) => {
    const story = await Story.findById(req.params.id).populate('comments');
    res.json(story);
});

module.exports = router;
