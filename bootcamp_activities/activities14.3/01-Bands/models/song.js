module.exports = function (sequelize, DataTypes) {
  var Song = sequelize.define("Song", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  Song.associate = function (models) {
    // We're saying that a Song should belong to an Band
    // A Song can't be created without an Band due to the foreign key constraint
    Song.belongsTo(models.Band, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Song;
};
