const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
  { productname : {type:String},
    rate:{type:Number}
  }


)

module.exports = mongoose.model('products',productSchema)