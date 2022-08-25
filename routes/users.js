const express = require('express')
const app = express()
const users = require('../users')
const { body, validationResult } = require('express-validator')
const {userIsexist} = require('../middleware/userexist')
const {userNotexist} = require('../middleware/usernotexist')
const validCity = require('../validCity')


app.get('/', (req,res)=>{
    res.json(users)
})

app.get('/:slug',userIsexist,(req,res)=>{
    res.json(req.user)
})

app.post('/',
userNotexist,
body('name').isLength({ min: 4 }).withMessage('name too short')
,body('password').isLength({min: 8}).withMessage('password too short'),
body('email').isEmail().withMessage('invalid mail'),
body('city').isIn(validCity).withMessage('invalid city'),
body('profile_picture').exists().withMessage('missing picture'),
(req,res)=>{
    const { errors } = validationResult(req)

    if (errors.length > 0) {
        res.status(400).json(errors)
      } else {
        const {user} = req
        users.push(user)
        res.json(user)
      }
})

module.exports = app