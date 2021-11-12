const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: { type: String},
    articleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article'
    }
  });

module.exports = commentSchema