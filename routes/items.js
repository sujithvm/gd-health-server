var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Item = mongoose.model('Item');

router.post('/', function (req, res) {

    if (req.body.item_id && req.body.item_name) {

        Item.findOne({item_id: req.body.item_id}, function (err, item) {

            if (err) {
                return res.json({
                    err: true,
                    message: 'Error!!'
                });
            } else if (!item) {

                // make a new item and save
                var newItem = new Item(req.body);
                newItem.id = new mongoose.Types.ObjectId;
                newItem.save();
                return res.json({
                    err: false,
                    mesage: 'Item created.'
                });

            } else if (item) {

                return res.json({
                    err: true,
                    message: 'Item already registered.'
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


router.get('/:id', function(req, res) {
    Item.findOne({item_id: req.params.id}, function (err, item) {
        if (err) {
            res.json({
                err : true,
                message : "Error finding specified item " + req.params.item_id + " ."
            })
        } else {
            res.json({
                err : false,
                message : "Item found",
                response : item
            })
        }
    })
});

router.get('/', function(req, res) {
    Item.find(function(err, items){
        if (err) {
            res.json({
                err : true,
                message : "Error finding all items"
            })
        } else {
            res.json({
                err : false,
                message : "All items found",
                response : items
            })
        }
    })
});

module.exports = router;
