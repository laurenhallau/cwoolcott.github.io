module.exports = function(sequelize, DataTypes) {
  var AuthorPost = sequelize.define("AuthorPost");

  AuthorPost.associate = function(models) {

    AuthorPost.belongsTo(models.Author);
    AuthorPost.belongsTo(models.Post);
  };
  return AuthorPost;
};
