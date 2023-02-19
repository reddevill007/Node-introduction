const { urlencoded, json } = require("express");
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(urlencoded({ extended: true }));
app.use(json());
app.use(cors());

const port = 8000;

// Connection
mongoose
  .connect("mongodb://localhost:27017/tutorial-app-1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mong Error", err));

// Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    job_title: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Model
const User = mongoose.model("user", userSchema);

app.get("/users", async (req, res) => {
  const allDbUsers = await User.find({});
  const html = `
      <ul>
          ${allDbUsers
            .map((user) => `<li>${user.firstName} - ${user.email}</li>`)
            .join("")}
      </ul>
    `;

  res.send(html);
});

app.get("/api/users", async (req, res) => {
  const allDbUsers = await User.find({});

  return res.json(allDbUsers);
});

app.post("/api/users", async (req, res) => {
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
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" });
    return res.json({ status: "success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "success" });
  });

app.listen(port, () => console.log(`Listening on port ${port}...`));
