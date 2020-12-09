const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    bookPrice: {
        type: Number,
        required: true
    },
    bookAuthor: {
        type: String,
        required: true
    },
    subscribers: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    reviews: [{
        type: ObjectId,
        ref: "Review"
    }],
}, { timestamps: { createdAt: 'created_at' } });


module.exports = mongoose.model('Book', bookSchema);
