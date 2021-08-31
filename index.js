const dbSetup = require("./db/db-setup");
const express = require("express");
const User = require("./db/models/user");
const Video = require("./db/models/video");
const Channel = require("./db/models/channel");

dbSetup();

const app = express();
app.use(express.json());

app.get("/user/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.query().findById(id).withGraphFetched("channel");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.get("/video/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Video.query().findById(id).withGraphFetched("channel");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

app.get("/channel/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Channel.query()
      .findById(id)
      .withGraphFetched("video")
      .withGraphFetched("user");
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});
app.listen(8080, () => console.log("Server running on port 8080"));
