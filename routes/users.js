var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

router.get('/', function(req, res) {
    User.find(function(err, users){
        if (err) {
            res.json({
                err : true,
                message : "Error finding all users"
            })
        } else {
            res.json({
                err : false,
                message : "All users found",
                response : users
            })
        }
    })
});

module.exports = router;
