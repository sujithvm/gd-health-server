var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');

var tokenize = require('../lib/tokenize');

router.post('/', function (req, res) {

    if (req.body.three_letter_account && req.body.password) {

        User.findOne({three_letter_account: req.body.three_letter_account}, function (err, user) {
            if (err) {
                return res.json({
                    err: true,
                    message: 'Error!!'
                });
            } else if (!user) {

                // create token for user
                req.body.token = tokenize(req.body.three_letter_account + req.body.password);


                // make a new user and save
                var newUser = new User(req.body);
                newUser.id = new mongoose.Types.ObjectId;
                newUser.save();
                return res.json({
                    err: false,
                    mesage: 'Account created.'
                });

            } else if (user) {
                // exits already

                return res.json({
                    err: true,
                    message: 'User already registered.'
                });

            }
        })
    } else {
        return res.json({
            err: true,
            message: 'Missing parameters.'
        });
    }
});

module.exports = router;
