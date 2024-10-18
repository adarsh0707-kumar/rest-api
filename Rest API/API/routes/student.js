const express = require('express');
const router = express.Router();
const Student = require('../model/student');

const mongoose = require('mongoose');
const { error } = require('console');

router.use(express.json());

router.get('/', (req, res, next) => {
    // Student.find()
    //     .then((students) => {
    //         res.status(200).json(students);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         res.status(500).json({ error: err });
    //     });
    console.log("GET")
});

router.post('/', (req, res, next) => {
    // const student = new Student({
    //     _id: new mongoose.Types.ObjectId,
    //     name: req.body.name,
    //     email: req.body.email,
    //     phone: req.body.phone,
    //     gender: req.body.gender
    // });  

    // student.save()
    // .then(result =>{
    //     console.log(result);
    //     res.status(200).json({
    //         newStudent: result
    //     });
    // })
    // .catch(err=>{
    //     console.log(err);
    //     res.status(500).json({
    //         error: err
    //     });
    // });
    console.log("POST");
});

module.exports = router;