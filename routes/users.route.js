const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controller");

let router = require("express").Router();

router.get("/", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
