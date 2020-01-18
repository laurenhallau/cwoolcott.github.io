const mongoose = require("mongoose");

const Example = require("./exampleModel.js");

mongoose.connect("mongodb://localhost/dbExample", { useNewUrlParser: true });


const data = {
  array: ["item4", "item2", "item4"],
  boolean: false,
  string:
    "\"Don't worry if it doesn't work right. If everything did, you'd be out of a job\" - Mosher's Law of Software Engineering",
  number: 43
};

Example.create(data)
  .then(dbExample => {
    console.log(dbExample);
  })
  .catch(({ message }) => {
    console.log(message);
  });
