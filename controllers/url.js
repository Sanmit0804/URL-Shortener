const ShortUniqueId = require("short-unique-id");

const uid = new ShortUniqueId({ length: 8 });
const URL = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "url is requried" });

  const ShortUniqueId = uid.rnd();
  await URL.create({
    shortId: ShortUniqueId,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.render('home', {id: ShortUniqueId , protocol: req.protocol, host:req.get('host') })
  // return res.json({ id: ShortUniqueId });  // To get JSON response.
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.ShortUniqueId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

module.exports = { handleGenerateNewShortURL ,handleGetAnalytics};
