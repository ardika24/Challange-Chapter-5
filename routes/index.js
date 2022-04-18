const express = require("express");
const router = express.Router();

const gameRoutes = require("./game");
const userRoutes = require("./user");

router.use("/users", userRoutes);
router.use("/game", gameRoutes);
router.get("/", (req, res) => {
    res.render("home");
});

module.exports = router;