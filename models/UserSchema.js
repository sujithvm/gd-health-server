var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    three_letter_account: String,
    password: String,
    gcm_id: String,
    token: String,
    gd_token : String,
    total_calories: { type: Number, default: 0 },
    salad_fruit_count: { type: Number, default: 0 },
    user_events : [
        {
            event_type: String,
            event_calories: { type: Number, default: 0 },
            event_time : Date
        }
    ]
});

mongoose.model('User', UserSchema);
