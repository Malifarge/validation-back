const { default: slugify } = require('slugify')
const users = require('../users')

const userNotexist = (req, res, next) =>{
    const  slug  = slugify(req.body.name,{lower: true})
    const user = users.find(user => user.slug===slug)

    if(!user){
        req.user = {
            ...req.body,
            slug : slug
        }
        next()
    }else{
        res.status(409).json("User exist")
    }
}

module.exports = {
    userNotexist
  }