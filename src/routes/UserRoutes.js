const express = require("express");
const router = express.Router();

const { createNewUser, listAllUsers, userUpdate, userDelete, findUserById } = require("../controller/UserController")

router.post("/", createNewUser);
router.get("/", listAllUsers);
router.get("/:id", findUserById)
router.put("/:id", userUpdate);
router.delete("/:id", userDelete);

module.exports = router;