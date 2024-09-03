const mongoose = require('mongoose');

const blogPostSchema =new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);
module.exports = BlogPost;