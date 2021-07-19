const express = require('express');
const mongoose =require('mongoose');
const url = 'mongodb://localhost/TaskDB'
const app = express();
mongoose.connect(url,{useNewUrlParser:true}) //to avoid warning
// to get handle
const con = mongoose.connection
con.on('open', function(){
    console.log('connected to db');
})

app.use(express.json()) // to tell express we are using json

const  taskRouter = require('./routers/tasks');
// using middleware

app.use('/tasks', taskRouter)
app.listen(3000, ()=>{
    console.log('servers sstartssed')
})