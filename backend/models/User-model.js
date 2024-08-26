const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    bgcolor: String,
    videos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Video' }] // Reference to Video model
});

const Usermodel = mongoose.model('User', userSchema);

module.exports = Usermodel;
