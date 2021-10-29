const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: String,
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    lastLoginTime: {
        type: Date,
        default: Date.now()
    }
})

const user = mongoose.model("user", UserSchema);

module.exports = user