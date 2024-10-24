const express = require("express");
const {
  handleGenerateNewShortURL,
  getShortUrl,
} = require("../controllers/url");

const router = express.Router();

router.post("/", handleGenerateNewShortURL);
router.get("/:shortId", getShortUrl);
module.exports = router;
