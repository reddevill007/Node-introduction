const express = require("express");
const {
  generateNewShortURL,
  handleGetAnalytics,
} = require("../controllers/url.js");

const router = express.Router();

router.post("/", generateNewShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
