const express = require("express");
const router = express.Router();

const { createUserReservation, getUserReservation, updateReservations, deleteReservation } = require("../controller/ReservationController");

router.post("/", createUserReservation);
router.get("/", getUserReservation);
router.put("/:id", updateReservations);
router.delete("/:id", deleteReservation);

module.exports = router;