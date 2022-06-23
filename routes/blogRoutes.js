const router = require('express').Router();

const { createBlogPost } = require('../controller/createBlog')
const { getBlogPostById, getAndPatchById, getBlogPostByPage } = require('../controller/getBlog') 
const { getBlogAndDelete } = require('../controller/deleteBlog')


router.post('/', createBlogPost)
router.get('/:id', getBlogPostById)
router.get('/', getBlogPostByPage)
router.patch('/:id', getAndPatchById)
router.delete('/:id', getBlogAndDelete)




module.exports = router;