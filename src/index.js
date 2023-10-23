require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

/**
 * Importando as entry points
 */
const userRoutes = require("./routes/UserRoutes")
const estabilishmentRoutes = require("./routes/EstablishmentRoutes")

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3333

app.use("/api/users", userRoutes)
app.use("/api/estabilishment", estabilishmentRoutes)

app.listen(port, () => {
    console.log(`App started at ${new Date().toLocaleString("pt-BR")}`);
})