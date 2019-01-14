let request = require('supertest')
let server = require('./../../server/server')

test('test if the server is up', (done) => {
  // Act
  request(server).get('/')
    .then((res, err) => {
      expect(res.statusCode).toBe(200)
      // Assert
      done()
    })
})