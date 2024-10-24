const shortid = require("shortid");
const URL = require("../models/url");
async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  console.log("Data in body", req.body);
  if (!body.url) return res.status(400).json({ error: "Url is required" });
  const shortID = shortid.generate(8);
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  //console.log("Geted id is", shortID);
  return res.json({ id: shortID });
}

async function getShortUrl(req, res) {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    // push in Array to keep visit history
    {
      $push: {
        visitHistory: {
          timestamp: new Date(),
        },
      },
    }
  );
  console.log("What is in Entry", entry);
  res.redirect(entry.redirectURL);
}

async function getAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}
module.exports = { handleGenerateNewShortURL, getShortUrl, getAnalytics };
