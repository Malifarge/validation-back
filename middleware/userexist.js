const users = require('../users')

const userIsexist = (req, res, next) =>{
    const { slug } = req.params
    const user = users.find(user => user.slug===slug)

    if(user){
        req.user = user
        next()
    }else{
        res.status(404).json("User not Found")
    }
}

module.exports = {
    userIsexist
  }