const express = require("express");
const router = express.Router();

const { createNewUser, listAllUsers, userUpdate, userDelete } = require("../controller/UserController")

router.post("/", createNewUser);
router.get("/", listAllUsers);
router.put("/:id", userUpdate);
router.delete("/:id", userDelete);

module.exports = router;