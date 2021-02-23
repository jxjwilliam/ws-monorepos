const http = require('http')
const { isEmpty, uniqObj, extractObj } = require('./lib/helper')

isEmpty({})
uniqObj([], {})
extractObj([], {})

/**
 * simplest http-server
 * curl localhost:8080
 */
http
  .createServer((req, res) => {
    res.write('Hello World from Best IT Consulting!')
    res.end()
  })
  .listen(8080)
