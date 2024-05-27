const express = require("express");
const path = require("path");
const URL = require("./models/url");
const urlRoute = require("./Routes/url");
const staticRoute = require("./Routes/staticRouter");
const connectToMongoDB = require("./connect");
const app = express();
const PORT = process.env.PORT || 8001;

connectToMongoDB("mongodb://localhost:27017/shortURL").then(() => {
  console.log("MongoDB connected");
});

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json()); // for getting json data
app.use(express.urlencoded({ extended: false })); // Because now we are getting from "FORM" of html

app.get("/test", async (req, res) => {
  const allUrls = await URL.find({});
  return res.render("home", {
    urls: allUrls,
    name: "Sanmit",
  });
});

app.use("/url", urlRoute);
app.use("/", staticRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
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

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
