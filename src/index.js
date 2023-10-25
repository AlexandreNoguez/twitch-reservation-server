require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

/**
 * Importando as entry points
 */
const authRoutes = require("./routes/AuthRoutes");
const userRoutes = require("./routes/UserRoutes");
const estabilishmentRoutes = require("./routes/EstablishmentRoutes");
const userReservationRoutes = require("./routes/UserReservationRoutes");


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3333

app.use("/api/login", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/estabilishment", estabilishmentRoutes);
app.use("/api/reservations", userReservationRoutes);

app.listen(port, () => {
    console.log(`App started at ${new Date().toLocaleString("pt-BR")}`);
})