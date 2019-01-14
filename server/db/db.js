const knex = require('knex')
const config = require('../../knexfile').development
const db = knex(config)

function getPosts() {
  return db('posts').then(posts => {
    return posts.map(posts => {
      posts
    })
  })
}

function getContent(){
    return db('content').select()
}

module.exports = {
  getPosts,
  getContent
}