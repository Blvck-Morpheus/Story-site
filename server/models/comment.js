const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: String,
    author: String,
    story: { type: mongoose.Schema.Types.ObjectId, ref: 'Story' }
});

module.exports = mongoose.model('Comment', commentSchema);
