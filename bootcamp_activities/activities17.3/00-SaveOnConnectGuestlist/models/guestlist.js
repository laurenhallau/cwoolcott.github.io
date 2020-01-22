const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const guestListSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "Enter a first name."
  },
  lastName: {
    type: String,
    trim: true,
    required: "Enter a last name."
  },
  guests: {
    type: Number,
    required: "Enter a Number of Guests",
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const GuestList = mongoose.model("GuestList", guestListSchema);

module.exports = GuestList;
