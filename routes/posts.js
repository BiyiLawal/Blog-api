const express = require('express');
const router = express.Router();
const { createPost, getPost, getAllPosts, updatePost, deletePost } = require('../controllers/postsController')

//create a new blog post
router.post('/', createPost);

//get a single blog post
router.get('/:id', getPost);

//get all posts
router.get('/', getAllPosts);

//update a post
router.put('/:id', updatePost);

//delete a post
router.delete('/:id', deletePost);

module.exports = router;