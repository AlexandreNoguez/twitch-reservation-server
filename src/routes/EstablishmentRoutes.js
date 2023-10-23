const express = require("express");
const router = express.Router();

const { createNewEstablishment, listAllEstabilishments, estabilishmentUpdate, deleteEstabilishment } = require("../controller/EstablishmentController");

router.post("/", createNewEstablishment);
router.get("/", listAllEstabilishments);
router.put("/:id", estabilishmentUpdate);
router.delete("/:id", deleteEstabilishment);


module.exports = router;