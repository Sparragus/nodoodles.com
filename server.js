import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import mongoose from 'mongoose'

import api from './api'

const app = express()
// =======================
// configuration =========
// =======================
//import config from './config.js'

app.set('port', process.env.PORT || 3000)
//mongoose.connect(config.database) // connect to database

// Use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// use morgan to log requests to the console
app.use(morgan('dev'))


// =======================
// routes ================
// =======================
// Static Assets
app.use(express.static('public'))

// API
// app.use('/api', api)

// Basic route
app.get('/', function(req, res) {
    res.send('Hello, World!')
})

export default app
