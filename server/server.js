const express = require('express')
const path = require('path')
const server = express()

const postsRoutes = require('./routes/postsRoutes');

server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(express.json())

server.use('/api', postsRoutes)

server.get('/test', (req, res) => {
res.send('test test test test')
})


module.exports = server