const express = require("express");
const {
  handleAllUsers,
  getUserById,
  handAddNewUser,
  handleDeleteUserById,
  handleUpdateUserById,
  handleGetUserById,
} = require("../controllers/user.js");

const router = express.Router();

router.route("/").get(handleAllUsers).post(handAddNewUser);

router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);

module.exports = router;
