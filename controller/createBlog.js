const BlogPost = require("../model/blogSchema");

const createBlogPost = async (req, res) => {
  const { title, content, author } = req.body;
  const blogPost = await BlogPost.create({ title, content, author });
  res.json(blogPost);
};

module.exports = {
  createBlogPost,
};
