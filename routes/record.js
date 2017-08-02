var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Item = mongoose.model('Item');

var tokenize = require('../lib/tokenize');

router.post('/', function (req, res) {

    if (req.body.token) {


        User.findOne({token: req.body.token}, function (err, user) {
            if (err || !user) {
                return res.json({
                    err: true,
                    message: 'Error in finding user!!'
                });
            } else {


                if (req.body.item_type == "fitbit" && req.body.calories) {

                    var obj = new Object()
                    obj.event_type = req.body.item_type;
                    obj.event_calories = req.body.calories;
                    obj.event_time = Date.now()

                    console.log(obj)

                    user.user_events.push(obj);
                    user.total_calories -= obj.event_calories;
                    user.save();

                    return res.json({
                        err: false,
                        message: 'Fitbit Item successfully added to user ' + user.first_name + " " + user.last_name
                    });

                } else {


                    Item.findOne({item_id: req.body.item_id}, function (err, item) {

                        if (err || !item) {
                            return res.json({
                                err: true,
                                message: 'Error in finding item!!'
                            });
                        } else {

                            if (item.item_type == "salad" || item.item_type == "fruit") {
                                user.salad_fruit_count += 1
                            }


                            user.total_calories += item.calories;

                            var obj = new Object()
                            obj.event_type = item.item_type;
                            obj.event_calories = item.calories;
                            obj.event_time = Date.now()

                            user.user_events.push(obj);

                            user.save();

                            return res.json({
                                err: false,
                                message: 'Item successfully added to user ' + user.first + " " + user.last_name
                            });
                        }
                    });

                }


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
