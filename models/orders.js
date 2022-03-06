const mongoose = require('mongoose')
const product = require('./products')
const user = require('./users')
const ordersSchema = mongoose.Schema(
 { amount: {type:Number},
   qty:{type:Number},
   productid :{type: mongoose.Schema.ObjectId, ref: product},
   userid:{type:mongoose.Schema.ObjectId, ref: user}
 }


)
module.exports = mongoose.model('orders',ordersSchema)