const express = require("express");
const { connectDB } = require("./connection.js");
const urlRoute = require("./routes/url.js");
const URL = require("./models/url.js");

const PROT = 8001;
const app = express();

connectDB("mongodb://localhost:27017/url-shortner");

app.use(express.json());

app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
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
