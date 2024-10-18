const express = require('express');
const studentRoute = require('./API/routes/student');
const facultyRoute = require('./API/routes/faculty');
const mongoose = require('mongoose');
// const { connected } = require('process');


const bodyParser = require('body-parser');






mongoose.connect('mongodb+srv://ak1394986:GzY2ImcUGuDblbg0@cluster0.edq2a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');


mongoose.connection.on('error',err=>{
    console.log('connection failed',err);
});

mongoose.connection.on('connected',connected=>{
    console.log('connected with mongodb');
});
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




app.use('./student',studentRoute);
app.use('./faculty', facultyRoute);

app.all('*',(req,res,next)=>{
    res.status(404).json({
        message:'Route not found'
    });
})

module.exports = app;