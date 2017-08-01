var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    three_letter_account: String,
    password: String,
    gcm_id: String,
    token: String,
    gd_token : String,
});

mongoose.model('User', UserSchema);
