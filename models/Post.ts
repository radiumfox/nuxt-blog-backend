const mongoose = require("mongoose");

const Post = mongoose.model("Post", {
    date: String,
    title: String,
    content: String,
    images: [String],
    tags: [String],
}, 'blog_posts');

module.exports = { Post };