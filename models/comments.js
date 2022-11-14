const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    text: String,
    commentedBy: String,
    product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products'
    }
})

module.exports = mongoose.model('Comments', commentsSchema);