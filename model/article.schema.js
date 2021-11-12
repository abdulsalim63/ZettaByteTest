const mongoose = require('mongoose')
const commentSchema = require('./comment.schema')

const articleSchema = new mongoose.Schema({
    title:  { type: String},
    description:  { type: String},
    comments: [commentSchema]
  });

module.exports = articleSchema