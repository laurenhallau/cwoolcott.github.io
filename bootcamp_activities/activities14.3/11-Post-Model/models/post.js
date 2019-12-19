
// Add code here to create a Post model
// This model needs a title, a body, and a category
// Don't forget to 'return' the post after defining

//title STRING that can't be Null and has a minimum length of 1 and 160

//body TEXT that can't be Null and has a minimum length of 1  

//category STRING that has a defaultValue of "Personal"

module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post",
    {
      title: {
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
          len: [1, 255]
        }
      },
      body: {
        type: DataTypes.TEXT,
        // AllowNull is a flag that restricts a todo from being entered if it doesn't
        // have a text value
        allowNull: false,
        // len is a validation that checks that our todo is between 1 and 140 characters
        validate: {
          notEmpty: {
            args: true,
            msg: "Required"
          }
        }
      },
      category: {
        type: DataTypes.STRING,
        defaultValue: "Personal",
        // AllowNull is a flag that restricts a todo from being entered if it doesn't
        // have a text value
        allowNull: false,
        // len is a validation that checks that our todo is between 1 and 140 characters
        validate: {
          notEmpty: {
            args: true,
            msg: "Required"
          }
        }
      }
    })
  return Post;
};


