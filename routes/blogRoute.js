const router = require('express').Router();
const Blog = require('../models/blog');

router.route('/').get((req, res) => {
    Blog.find({
        title: req.body.title,
        description: req.body.description
    })
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;

    const newBlog = Blog({title: title, description: description, postTime: new Date()})

    newBlog.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;