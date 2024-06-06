const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: String,
    author: String,
    content: String,
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    rating: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Story', storySchema);
