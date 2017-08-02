var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');


router.get('/:token', function(req, res) {
    User.findOne({'token': req.params.token}).populate('items').exec(function(err, user){
        if (err) {
            return res.json({
                err : true,
                message : "Error finding user"
            })
        } else {
            return res.json({
                err : false,
                message : "User found",
                response : user
            })
        }
    })
});

router.get('/', function(req, res) {
    User.find().populate('items').exec(function(err, users){
        if (err) {
            return res.json({
                err : true,
                message : "Error finding all users"
            })
        } else {
            return res.json({
                err : false,
                message : "All users found",
                response : users
            })
        }
    })
});

module.exports = router;
