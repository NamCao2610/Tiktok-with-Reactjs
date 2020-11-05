const mongoose = require('mongoose');

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: Number,
    messages: Number,
    shares: Number
})

module.exports = mongoose.model('Tiktok', tiktokSchema);