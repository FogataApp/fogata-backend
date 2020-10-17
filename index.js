const express = require('express')
const app = express()

const { config } = require('./config/index')
const fogataAPI = require('./routes/places')
const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers')

//body parser
app.use(express.json())

fogataAPI(app)

app.use(logErrors)
app.use(errorHandler)

app.listen(config.port, function () {
  console.log(`listening http://localhost:${config.port}`)
})
