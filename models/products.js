const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        image_url: String,
        name: String,
        price: Number,
        description: String,
        product_owner: String,
        comments: []
    },
    {
        versionKey: false
    }
);

module.exports = mongoose.model('Products', productSchema);