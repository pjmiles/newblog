const BlogPost = require("../model/blogSchema");

const createBlogPost = async (req, res) => {
  const { title, content, author } = req.body;
  const blogPost = await new BlogPost({ title, content, author });
  blogPost.save();
  console.log(blogPost)
  res.json(blogPost);
  
};

module.exports = {
  createBlogPost
};
