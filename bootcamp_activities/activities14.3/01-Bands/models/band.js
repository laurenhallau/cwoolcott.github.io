module.exports = function (sequelize, DataTypes) {
  var Band = sequelize.define("Band", {
    // Giving the Band model a name of type STRING
    name: DataTypes.STRING
  });

  Band.associate = function (models) {
    // Associating Band with Songs
    // When an Band is deleted, also delete any associated Songs
    Band.hasMany(models.Song, {
      onDelete: "cascade"
    });
  };

  return Band;
};
