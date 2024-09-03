const express = require('express');
const mongoose = require('mongoose');
const app = express();
const postRoutes = require('./routes/posts');
const Comment = require('./models/comment');

require('dotenv').config();
//middleware
app.use(express.json());

//use the post routes
app.use('/posts', postRoutes);

//connect to mongoDB
const mongoURL = process.env.MONGODB_URL
mongoose.connect(mongoURL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('connected to mongoDB'))
  .catch((err) => console.error('could not connect to MongoDB', err));

//define route for testing
app.get('/test', (req, res) => {
    res.send('test route working');
});

//search by title, category or content
app.get('/posts', async (req, res) => {
    try {
        const searchTerm = req.query.term;
        const filter = searchTerm
            ? {
                  $or: [
                      { title: { $regex: searchTerm, $options: 'i' } },
                      { content: { $regex: searchTerm, $options: 'i' } },
                      { category: { $regex: searchTerm, $options: 'i' } }
                  ]
              }
            : {};

        const posts = await Post.find(filter);
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts' });
    }
});

// Add a new comment to a post
app.post('/posts/:id/comments', async (req, res) => {
    try {
        const comment = new Comment({
            postId: req.params.id,
            content: req.body.content,
            author: req.body.author
        });
        await comment.save();
        res.status(201).json(comment);
    } catch (error) {
        res.status(500).json({ message: 'Error adding comment' });
    }
});

// Get comments for a post
app.get('/posts/:id/comments', async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.id });
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching comments' });
    }
});


//start server
const port = 3000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
})