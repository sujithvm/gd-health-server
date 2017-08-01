(function() {
    var crypto;

    crypto = require('crypto');

    module.exports = function(str) {
        return crypto.pbkdf2Sync(str, 'sujithvadakkepat', 4096, 64, 'sha256').toString('hex');
    };

}).call(this);
