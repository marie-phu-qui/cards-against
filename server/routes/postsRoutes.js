const express = require('express')
const router = express.Router()
const request = require('superagent')

router.get('/posts', (req, res) => {
  request.get('https://jsonplaceholder.typicode.com/posts')
    .then(ApiRes => {
      res.json(ApiRes.text)
    })
    .catch(err => {
      console.log(err)
    })
})


module.exports = router