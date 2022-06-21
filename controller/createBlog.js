const BlogPost = require("../model/blogSchema");

const createBlogPost = (req, res) => {
  const { title, content, author } = req.body;
  const blogPost = new BlogPost({ title, content, author });
  blogPost.save();
  console.log(blogPost)
  res.json(blogPost);
  
};

module.exports = {
  createBlogPost
};
