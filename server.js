const express = require('express')
const connectdb = require('./config/connect_db')
const User = require('./models/User')
const app = express()
const port = 5000
require('dotenv').config({path:"./config/.env"})
app.use(express.json())
connectdb()
app.get('/api/users',(req,res)=>{
    User.find()
    .then(users=>res.send(users))
    .catch(err=>res.send(err))
})
app.post('/api/adduser',(req,res)=>{
    const {
        name,Last_name,email,phone
    }=req.body
    const newUser= new User({
        name,Last_name,email,phone
    })
    newUser.save()
    .then(user=>res.send(user))
    .catch(err=>res.send(err))
})
app.put('/api/updateuser/:userID',(req,res)=>{
    const userID=req.params.userID
    User.findByIdAndUpdate(userID,{...req.body},{new :true})
    .then(users=>res.send(users))
    .catch(err=>res.send(err))
    
})
app.delete('/api/deleteuser/:userID',(req,res)=>{
    const userID=req.params.userID
    User.findByIdAndDelete(userID)
    .then(user=>res.send(user))
    .catch(err=>res.send(err.message))
})
app.listen(port,err=>{err?console.error(err):console.log('server is running on port '+port)})
