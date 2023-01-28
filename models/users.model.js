const { v4: uuidv4 } = require("uuid");

let users = [
  {
    id: uuidv4(),
    username: "hridoyakanda",
    email: "lalalalala@gmail.com",
  },
  {
    id: uuidv4(),
    username: "hridoy2453",
    email: "rdoffice@gmail.com",
  },
];

module.exports = users;
