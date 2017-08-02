var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    item_id: String,
    item_name: String,
    item_type: String,
    serving_size: { type: String, default: "" },
    calories: { type: Number, default: 0 },
    calories_fat: { type: Number, default: 0 },
    total_fat: { type: Number, default: 0 },
    trans_fat : { type: Number, default: 0 },
    saturated_fat : { type: Number, default: 0 },
    cholesterol: { type: Number, default: 0 },
    sodium: { type: Number, default: 0 },
    carbohydrate: { type: Number, default: 0 },
    fiber: { type: Number, default: 0 },
    sugars: { type: Number, default: 0 },
    protein: { type: Number, default: 0 },
    vitamin_a: { type: Number, default: 0 },
    vitamin_c: { type: Number, default: 0 },
    calcium: { type: Number, default: 0 },
    iron: { type: Number, default: 0 }
});

mongoose.model('Item', ItemSchema);
