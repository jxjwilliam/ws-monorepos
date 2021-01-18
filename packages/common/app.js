import express from 'express'

const app = express()

const server = app.listen(8002, () => {
  console.log('server is running at 8002!')
})

module.exports = server
