const express = require('express');
const { Comment } = require('./app');
const router = express.Router()

router.use(function commentMiddleware(req, res, next) {
  console.log('Starting request to comment');
  next()
  console.log('End of request to comment');
})

router.post('/', function (req, res){
  const { comment, articleId } = req.body
  const newComment = new Comment({
    comment, articleId
  })
  newComment.save()
  res.send(newComment)
})

router.get('/', async function (req, res){
  const { limit, page } = req.query
  const responseDb = await Comment.find({}).exec()
  const skip = Math.ceil(responseDb.length / limit)
  
  const response = {
    totalPage: responseDb.length,
    page: page,
    data: responseDb.filter((x, y) => y => skip).take((x, y) => y < limit)
  }
  res.send(response)
})

router.put('/', async function (req, res){
  const { _id, comment } = req.body
  let updateComment = await Comment.findOne({ _id: _id })
  updateComment.comment = comment
  updateComment.save()
  res.send(updateComment)
})

router.delete('/', async function (req, res){
  const { _id } = req.query
  await Comment.deleteOne({ _id: _id })
  res.send()
})

module.exports = router