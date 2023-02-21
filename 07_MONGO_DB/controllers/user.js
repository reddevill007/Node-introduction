const User = require("../models/user.js");

async function handleAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ error: "User not found" });
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
  return res.json({ status: "success" });
}

async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

async function handAddNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).send({
      message: "All fields are required",
    });
  }

  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });

  return res.status(201).send({ msg: "success" });
}

module.exports = {
  handleAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handAddNewUser,
};
