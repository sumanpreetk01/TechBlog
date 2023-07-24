const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');
const commentData = require('./commentData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const blogs = await Blog.bulkCreate(blogData);

  for (const blog of blogs) {
    // Create a random number of comments (1 to 5) for each blog
    const numComments = Math.floor(Math.random() * 5) + 1;
    for (let i = 0; i < numComments; i++) {
      await Comment.create({
        text: commentData[Math.floor(Math.random() * commentData.length)].text,
        user_id: users[Math.floor(Math.random() * users.length)].id,
        blog_id: blog.id,
      });
    }
  }
};

seedDatabase();
