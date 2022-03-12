const express = require('express');
const router = express.Router();
const Student = require('../models/student');

// router.get('./students', (req,res)=>{
//     res.send({type: 'GET'});
// });

//after making model and schema
router.get('/students',function(req,res,next){
    Student.find({}).then(function(students){
        res.send(students);
    }).catch(next);
});

// router.post('/students', function(req, res){
//     res.send({
//         type: 'POST',
//         name: req.body.name,
//         roll: req.body.roll
//     });
// });


router.post('/students',function(req,res,next){
    Student.create(req.body).then(function(student){
        res.send(student);
    }).catch(next);
});

// router.put('/students/:id', function(req, res){
//     res.send({type: 'PUT'});
// });
// router.delete('/students/:id', function(req, res){
//     res.send({type: 'DELETE'});


// update a student in the database
router.put('/students/:id',function(req,res,next){
    Student.findOneAndUpdate({_id: req.params.id},req.body).then(function(student){
        Student.findOne({_id: req.params.id}).then(function(student){
            res.send(student);
        });
    });
});

// delete a student in the database
router.delete('/students/:id',function(req,res,next){
    Student.findOneAndDelete({_id: req.params.id}).then(function(student){
        res.send(student);
    });
});


module.exports = router;



