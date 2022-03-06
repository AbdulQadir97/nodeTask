const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/routes')
const appRoute = require("./routes/welcome")
const path = require('path')

mongoose.connect('mongodb://localhost/local')

app.use(express.json())
app.use('/users',router)

app.use(express.static(path.join(__dirname,"public")))

app.set("view engine", "ejs")
app.set("views", "views")
app.use('/app',appRoute)
app.use((req,res)=>{

    res.render("404")

})

app.listen(3000)
