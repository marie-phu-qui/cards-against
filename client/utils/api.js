import request from 'superagent'

export function getTest() {
  console.log('test test test')
  request.get('/test')
}
