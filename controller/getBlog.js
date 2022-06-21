const BlogPost = require("../model/blogSchema");

// get post by id
const getBlogPostById = async (req, res) => {
  const blogPostById = await BlogPost.findOne({});

  res.json(blogPostById);
};

// patch
const getAndPatchById = async (req, res) => {
  const patchById = await BlogPost.findOneAndUpdate(req.params.id, {$set: req.body,});

  res.json(patchById);
};


// get post by page
const getBlogPostByPage = async (req, res) => {
    const { page, perPage } = req.query;
    const partition = {
        page: parseInt(page, 8) || 1,
        limit: parseInt(perPage, 3) || 5
    }
    const blogPost = await BlogPost.paginate({}, partition);
    res.json(blogPost) 
};

module.exports = {
  getBlogPostById,
  getAndPatchById,
  getBlogPostByPage
};
