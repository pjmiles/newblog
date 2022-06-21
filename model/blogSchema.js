const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const blogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    content: {
        type: String,
        trim: true,
        required: true
    },
    author: {
        type: String,
        trim: true,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

blogPostSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('BlogPost', blogPostSchema);

