const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

router.use((req, res, next) => {
  req.locals.user = req.user;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followerIdList = [];
  next();
});

router.get("/profile", isLoggedIn, (req, res) => {
  res.render("profile", { title: "내 정보 - Nodebird" });
});

router.get("/join", isNotLoggedIn, (req, res) => {
  res.render("join", { title: "회원가입 - Nodebird" });
});

router.get("/", (req, res, next) => {
  const twits = [];
  res.render("main", {
    title: "Nodebird",
    twits,
  });
});

module.exports = router;
