const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

const { config } = require('./config/index')
const fogataAPI = require('./routes/places')
const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers')
const notFoundHandler = require('./utils/middleware/notFoundHandler')

//body parser
app.use(express.json())

//routes
fogataAPI(app)

//Catch 404
app.use(notFoundHandler)

//Errors middleware
app.use(logErrors)
app.use(wrapErrors)
app.use(errorHandler)

app.listen(config.port, function () {
  console.log(`listening http://localhost:${config.port}`)
})
