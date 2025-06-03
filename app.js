const express = require('express')
const mongoose = require('mongoose')
const blogsRouter = require('./controller/blogs')
const config = require('./utils/config')

const app = express()

mongoose.connect(config.MONGODB_URI)

app.use('/api/blogs', blogsRouter)
app.use(express.json())

module.exports = app