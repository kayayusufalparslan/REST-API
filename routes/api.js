const express = require('express');
const router = express.Router();
const User = require('../models/user')


//get a list of user from the db
router.get('/users', (req, res, next) => {
    res.send({
        type: 'GET'
    });
});

//add a user to the db
router.post('/users', (req, res, next) => {
    User.create(req.body)
        .then(function (user) {
            res.send(user);
        })
        .catch(next);
});

//update a user in the db
router.put('/users/:id', (req, res, next) => {
    User.findByIdAndUpdate({
            _id: req.params.id
        }, req.body)
        .then(function (){
            User.findOne({_id: req.params.id})
            .then(function (user){
                res.send(user);
            });
        })
        .catch(next);
});

router.delete('/users/:id', (req, res, next) => {
    User.findByIdAndRemove({_id: req.params.id})
        .then(function (user) {
            res.send(user);
        })
        .catch(next);
});

module.exports = router;