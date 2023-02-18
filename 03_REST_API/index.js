const { urlencoded, json } = require("express");
const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const port = 8000;

app.use(urlencoded({ extended: true }));

// ROUTES
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/users", (req, res) => {
  const html = `
    <ul>
        ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
    </ul>
  `;

  res.send(html);
});

// Dynamic routes
// app.get("/api/users/:id", (req, res) => {
//   const id = Number(req.params.id);

//   const user = users.find((user) => user.id === id);

//   return res.json(user);
// });

app.post("/api/users", (req, res) => {
  // TODO: Create a user
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "success" });
  });
});

// app.patch("/api/users/:id", (req, res) => {
//   // TODO: Edit this users id
//   const id = Number(req.params.id);
//   return res.json({ status: "pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   // TODO: Edit this users id
//   const id = Number(req.params.id);
//   return res.json({ status: "pending" });
// });

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);

    const user = users.find((user) => user.id === id);

    if (!user) {
      return res
        .status(404)
        .json({ status: "error", message: "User not found" });
    }

    return res.json(user);
  })
  .patch((req, res) => {
    // TODO: Edit this users id
    const id = Number(req.params.id);
    const body = req.body;
    console.log(body);
  })
  .delete((req, res) => {
    // TODO: Edit this users id
    const id = Number(req.params.id);
    const filteredData = users.filter((user) => user.id !== id);
    fs.writeFile(
      "./MOCK_DATA.json",
      JSON.stringify(filteredData),
      (err, data) => {
        return res.json({ status: "success" });
      }
    );
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
