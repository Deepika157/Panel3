const mongoose = require('mongoose');

const prSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true,
    },
    wordCount:{
        type: Number,
    }
});

module.exports = mongoose.model('prSchema', prSchema);