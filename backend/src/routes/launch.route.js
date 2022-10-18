const express = require("express");
const { getLaunchData } = require("../utils/getLaunchData");

const router = express.Router();

router.get("/latest", async (req, res) => {
  try {
    const latest = await getLaunchData("latest");

    return res.send(latest);
  }
  catch (err) {
    return res.send(err);
  }
});

router.get("/next", async (req, res) => {
  try {
    const next = await getLaunchData("next");

    return res.send(next);
  }
  catch (err) {
    return res.send(err);
  }
});

router.get("/past", async (req, res) => {
  try {
    const past = await getLaunchData("past");

    return res.send(past);
  }
  catch (err) {
    return res.send(err);
  }
});

router.get("/upcoming", async (req, res) => {
  try {
    const upcoming = await getLaunchData("upcoming");

    return res.send(upcoming);
  }
  catch (err) {
    return res.send(err);
  }
});

module.exports = router;