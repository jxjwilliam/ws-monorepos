import express from 'express'
import http from 'http'
import logger from 'morgan'
import createError from 'http-errors'

const app = express()
const port = process.env.PORT || 8001

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', (req, res) => {
  res.send('It works')
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
  console.log(`服务运行在端口 ${port}!`)
})
