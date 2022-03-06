const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  username: {type:String},
  password:{type:String},
  admin:{type:String, default:'Yes'}


})

module.exports = mongoose.model('users',userSchema)