var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');


router.get('/', function(req, res) {
    User.find().populate('items').exec(function(err, users){
        if (err) {
            res.json({
                err : true,
                message : "Error finding users"
            })
        } else {

            users.sort(function(a, b) {
                return b.salad_fruit_count - a.salad_fruit_count;
            });

            return res.json({
                err : false,
                message : "Users sorted",
                response : users
            })
        }
    })
});

module.exports = router;