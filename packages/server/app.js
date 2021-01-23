import express from 'express'
import http from 'http'
import logger from 'morgan'
import createError from 'http-errors'
import cors from 'cors'
import path from 'path'
import helmet from 'helmet'

require('dotenv').config()

const app = express()
const port = process.env.PORT

app.use(logger('dev'))
app.use(cors())
app.use(helmet())
app.use(express.static(path.join(__dirname, 'build')))

app.get('/api/ms/:id', (req, res) => {
  const { id } = req.params
  const luckyNo = Math.floor(Math.random() * Math.floor(id))
  res.json({ msg: `Your lucky number is ${luckyNo}. ` })
})

app.use('/', (req, res) => {
  res.send('packages workspace works.')
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

const server = http.createServer(app)
server.listen(port, () => {
  console.log(`🚒 服务运行在端口 ${port}!`)
})
