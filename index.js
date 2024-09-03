const express = require('express');
const mongoose = require('mongoose');
const app = express();
const postRoutes = require('./routes/posts');

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

//start server
const port = 3000;
app.listen(port, () => {
    console.log(`server started on port ${port}`);
})