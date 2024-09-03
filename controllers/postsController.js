const BlogPost = require('../models/BlogPost');

//create new blog post
const createPost = async (req, res) => {
    try {
        const blogPost = new BlogPost(req.body);
        await blogPost.save();
        res.status(201).json(blogPost)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//get a single blogpost by ID
const getPost = async (req, res) => {
    try {
        const blogPost = await BlogPost.findById(req.params.id);
        if (!blogPost) {
            return res.status(404).json({ message: "Blog post not found" });
        }
        res.json(blogPost);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

// Get all blog posts
const getAllPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPost.find();
        res.json(blogPosts);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a blog post by ID
const updatePost = async (req, res) => {
    try {
        const blogPost = await BlogPost.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!blogPost) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.json(blogPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a blog post by ID
const deletePost = async (req, res) => {
    try {
        const blogPost = await BlogPost.findByIdAndDelete(req.params.id);
        if (!blogPost) {
            return res.status(404).json({ error: 'Blog post not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createPost,
    getPost,
    getAllPosts,
    updatePost,
    deletePost
};