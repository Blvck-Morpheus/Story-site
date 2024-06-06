const express = require('express');
const Comment = require('../models/comment');
const Story = require('../models/story');
const router = express.Router();

router.post('/:storyId', async (req, res) => {
    const { content, author } = req.body;
    const story = await Story.findById(req.params.storyId);
    const newComment = new Comment({ content, author, story: story._id });
    await newComment.save();
    story.comments.push(newComment);
    await story.save();
    res.status(201).json(newComment);
});

module.exports = router;
