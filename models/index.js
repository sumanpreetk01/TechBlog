const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./comment');

User.hasMany(Blog,{
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Blog.belongsTo(User,{
    foreignKey: 'blog_id'
});

Blog.hasMany(Comment,{
    foreignKey: 'blog_id'
});

Comment.belongsTo(Blog,{
    foreignKey: 'comment_id'
});

User.hasMany(Comment,{
    foreignKey: 'user_id'
});

Comment.belongsTo(User,{
    foreignKey: 'comment_id'
});

module.exports = {
    User,
    Blog,
    Comment
}

//User hasMany Blog

//Blog BelongsTo User

//Comment belongs to Blog

//Blog has many comments