const express=require('express')
const app=express()
require('dotenv').config()

const database=require('./database/db.js')
const router=require('./router/routes.js')

database()

app.use(express.json())
app.use('/',router)

module.exports=app