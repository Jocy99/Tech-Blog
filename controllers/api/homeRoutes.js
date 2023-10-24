const router = require('express').Router();
const authorize = require('../utils/authorize');
const { User, Post, Comment } = require('../models');
// add a get req for homepage
router.get('/', async (req, res) => {
    try {
        // get all posts and authors
        const result = await Post.findAll({
            include: {
                model: User,
            },
        })
        // serialize the data so template can read it
        const postsFlat = result.map((post) => post.get({ plain: true}))
    }
});
