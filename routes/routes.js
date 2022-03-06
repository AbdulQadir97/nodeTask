const express = require('express')
const products = require('../models/products')
const router = express.Router()
const users = require('../models/users')
const orders = require('../models/orders')
router.get('/',(req,res)=>{res.send('hello from routers')})


// signup api
router.get('/adduser',async(req,res)=>{
    const user =  new users(
         {username:req.body.username, password:req.body.password,admin:req.body.admin})   
        await user.save()
     res.send(user)
})
// login api
router.get('/login',async(req,res)=>{
   try{ const userval = await users.findOne({username:req.body.username, password:req.body.password})
        if (userval){res.send('logged in')
        localStorage.setItem('name',req.body.username);
       const b= localStorage.getItem('name');

    }
        else {res.send('invalid')}        
        }
   catch(err){res.send(err)}
     })



// add product
router.get('/addproduct',async(req,res)=>{
    const product =  new products(
         {productname:req.body.productname, rate: req.body.rate})   
        await product.save()
     res.send(product)
})
// view product
router.get('/viewproduct',async(req,res)=>{
    const product = await products.find()
    res.render("product", {product})

})
// update product
router.put('/updateproduct/:id', async(req,res)=>{
    try{
      const editproduct = {productname:req.body.productname,rate:req.body.rate}
      const a = await products.updateOne({_id:req.params.id},editproduct)
    //const a =await products.findById('6224998d900c2848433e2e35')  
    res.send(a)
    }
    catch(err){}
  })
// delete product
router.delete('/deleteproduct/:id', async(req,res)=>{
    try{
    
      const a = await products.deleteOne({_id:req.params.id})
      res.send(a)
    }
    catch(err){}
  })







// add order
router.get('/addorder', async(req,res)=>{
   const order = new orders(
       {qty:req.body.qty,productid:req.body.productid, userid:req.body.userid}

   )
    await order.save()
     res.send(order)
})


module.exports = router