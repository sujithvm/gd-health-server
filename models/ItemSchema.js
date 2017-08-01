var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    item_id: String,
    item_name: String,
    serving_size: String,
    calories: Number,
    calories_fat: Number,
    total_fat: Number,
    trans_fat : Number,
    saturated_fat : Number,
    cholesterol: Number,
    sodium: Number,
    carbohydrate: Number,
    fiber: Number,
    sugars: Number,
    protein: Number,
    vitamin_a: Number,
    vitamin_c: Number,
    calcium: Number,
    iron: Number
});

mongoose.model('Item', ItemSchema);
