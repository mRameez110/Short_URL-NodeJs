const express = require("express");
const { handleGenerateNewShortUR } = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenerateNewShortUR);

module.exports = router;
