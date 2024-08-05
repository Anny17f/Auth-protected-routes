const mongoose = require('mongoose');

const UserTokenSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, ref: 'User' 
    },
    token: {
         type: String, 
         required: true 
    },
    createdAt: {
         type: Date,
         default: Date.now, 
         expires: 3600 // 1 hour 
    }, 
});

const UserToken = mongoose.model('UserToken', UserTokenSchema);

module.exports = UserToken;
