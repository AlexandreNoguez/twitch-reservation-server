const express = require("express");
const router = express.Router();

const { createNewUser } = require("../controller/UserController")

router.post("/create", createNewUser)

module.exports = router;