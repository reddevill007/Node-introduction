const express = require("express");
const path = require("path");
const { connectDB } = require("./connection.js");
const urlRoute = require("./routes/url.js");
const staticRoute = require("./routes/staticRouter.js");
const URL = require("./models/url.js");

const PROT = 8001;
const app = express();

connectDB("mongodb://localhost:27017/url-shortner");

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  res.redirect(entry.redirectURL);
});

app.listen(PROT, () => {
  console.log(`Server is running on port ${PROT}`);
});
