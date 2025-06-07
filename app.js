const express = require('express')
const mongoose = require('mongoose')
const blogsRouter = require('./controller/blogs')
const config = require('./utils/config')
const middleware = require('./utils/middleware')

const app = express()

mongoose.connect(config.MONGODB_URI)

app.use(express.json())
app.use('/api/blogs', blogsRouter)

app.use(middleware.errorHandler)

module.exports = app