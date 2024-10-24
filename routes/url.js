const express = require("express");
const {
  handleGenerateNewShortURL,
  getShortUrl,
  getAnalytics,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", getShortUrl);
router.get("/analytics/:shortId", getAnalytics);
module.exports = router;
