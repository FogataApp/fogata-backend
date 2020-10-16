const express = require('express')
const app = express()

const { config } = require('./config/index')
const fogataAPI = require('./routes/places')

//body parser
app.use(express.json())

fogataAPI(app)

app.listen(config.port, function () {
  console.log(`listening http://localhost:${config.port}`)
})
