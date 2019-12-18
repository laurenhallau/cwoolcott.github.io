module.exports = function (sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: {
      type: DataTypes.STRING,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
      validate: {
        notEmpty: {
          args: true,
          msg: "Required"
        },
        is: {
          args: ["^[a-z]+$", 'i'],
          msg: "Only letters allowed"
        },
        len: {
          args: [5, 140],
          msg: "Should be between 5 and 140 characters"
        }
      }
    },
    complete: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    }
  });
  return Todo;
};
