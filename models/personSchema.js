const mongoose = require("mongoose");
const schema = mongoose.Schema;
//create a person with a prototype
const personSchema = new schema({
  name: {
    type: "string",
    required: true,
  },

  age: {
    type: "Number",
    required: [true, "Add your age please"],
  },
  favoriteFoods: {
    type: [String],
    default: [],
  },
  email: {
    type: "string",
    required: [true, "write your email please"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  password: {
    type: "string",
    required: [true, "enter your password please"],
  },
});

const Person = mongoose.model("person", personSchema);
module.exports = Person;
