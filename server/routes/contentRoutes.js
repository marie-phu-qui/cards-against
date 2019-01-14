const router = require('express').Router()

const db = require('../db/db')

router.get('/content', (req, res) => {
    db.getContent()
        .then(content => {
            let random = content[Math.floor(Math.random() * 20)]
            console.log('hi')
            res.json(content.entry)
        })
})

module.exports = router