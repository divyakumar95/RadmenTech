const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
//require('./services/passport')

//mongoose.connect(keys.mongoURI)
//require('./models/user')

const app = express()
require('./routes/formRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('Stating the server')