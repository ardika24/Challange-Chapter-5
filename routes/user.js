const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/user");

router.get("/", userControllers.getUsers);

router.post("/login", userControllers.postLogin, userControllers.loginSuccess);

router.post("/register", userControllers.postRegister, userControllers.registerSuccess)

router.get("/login", userControllers.getLogin);

router.get("/register", userControllers.getRegister);

module.exports = router;
