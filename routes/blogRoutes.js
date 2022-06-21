const router = require('express').Router();

const { createBlogPost } = require('../controller/createBlog')
const { getBlogPostById, getAndPatchById, getBlogPostByPage } = require('../controller/getBlog') 
const { getBlogAndDelete } = require('../controller/deleteBlog')


router.post('/blogpost', createBlogPost)
router.get('/blogpost/:id', getBlogPostById)
router.get('/blogposts', getBlogPostByPage)
router.patch('/blogpost/:id', getAndPatchById)
router.delete('/blogpost/:id', getBlogAndDelete)




module.exports = router;