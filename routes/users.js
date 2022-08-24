const express = require('express')
const app = express()
const users = require('../users')
const {userIsexist} = require('../middleware/userexist')

app.get('/', (req,res)=>{
    res.json(users)
})

app.get('/:slug',userIsexist,(req,res)=>{
    res.json(req.user)
})

module.exports = app