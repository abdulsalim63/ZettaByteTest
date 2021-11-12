const express = require('express')
const { Article } = require('./app');

const router = express.Router()

router.use(function articleMiddleware(req, res, next) {
  console.log('Starting request to article');
  next()
  console.log('End of request to article');
})

router.post('/', function (req, res){
  const { title, description} = req.body
  const newArticle = new Article({
    title, description
  })
  newArticle.save()
  res.send(newArticle)
})

router.get('/', function (req, res){
  const { limit, page } = req.query
  const responseDb = await Article.find({}).exec()
  const skip = Math.ceil(responseDb.length / limit)
  
  const response = {
    totalPage: responseDb.length,
    page: page,
    data: responseDb.filter((x, y) => y => skip).take((x, y) => y < limit)
  }
  res.send(response)
})

router.put('/', async function (req, res){
  const { _id, title, description } = req.body
  let updateArticle = await Article.findOne({ _id: _id })
  updateArticle.title = title
  updateArticle.description = description
  updateArticle.save()
  res.send(updateArticle)
})

router.delete('/', async function (req, res){
  const { _id } = req.query
  await Article.deleteOne({ _id: _id })
  res.send()
})

module.exports = router