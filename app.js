const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const article = require('./article')
const comment = require('./comment')
const articleSchema = require('./model/article.schema')
const commentSchema = require('./model/comment.schema')

const app = express()
const port = 3000
mongoose.Promise = global.Promise

mongoose.connect('mongodb+srv://dbUser:passwordqwerty1234@cluster0.fexz8.mongodb.net/sampleDatabase?retryWrites=true&w=majority', 
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
mongoose.model('Article', articleSchema)
mongoose.model('Comment', commentSchema)

app.use(cors())

app.use('/article', article)
app.use('/comment', comment)

app.get('/', (req, res) => {
  res.send(mongoose.model('Article', articleSchema).find({}).exec())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports.Article = mongoose.model('Article', articleSchema)
module.exports.Comment = mongoose.model('Comment', commentSchema)
module.exports.db = mongoose