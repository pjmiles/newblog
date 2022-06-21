const BlogPost = require("../model/blogSchema");

const getBlogAndDelete = (async (req, res) => {
    const blogPost = await BlogPost.findByIdAndDelete(req.params.id)

    res.json(`Deleted! ${blogPost}`)
})


module.exports = {
    getBlogAndDelete
}

