const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const port = 5000

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))