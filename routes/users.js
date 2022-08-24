const express = require('express')
const app = express()
const users = require('../users')
const {userIsexist} = require('../middleware/userexist')
const {userNotexist} = require('../middleware/usernotexist')


app.get('/', (req,res)=>{
    res.json(users)
})

app.get('/:slug',userIsexist,(req,res)=>{
    res.json(req.user)
})

app.post('/',userNotexist,(req,res)=>{
    const {user} = req
    users.push(user)
    res.json(user)
})

module.exports = app