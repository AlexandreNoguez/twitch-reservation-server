const express = require("express");
const router = express.Router();

const { login } = require("../controller/AuthController");

router.post("/", login);

module.exports = router;