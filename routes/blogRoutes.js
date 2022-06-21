const router = require('express').Router();

const { createBlogPost } = require('../controller/createBlog')


router.route('/blogpost').post(createBlogPost)

module.exports = router;