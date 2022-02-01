const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 20
    },
    avatar: {
        type: String,
    },
    coverPic: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
},
    { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);