require("dotenv").config();
const mongoose = require("mongoose");

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const DB_CLUSTER = process.env.DB_CLUSTER;

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.giyap1w.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conexão estabelecida")
    })
    .catch(err => {
        console.error(err)
    })

mongoose.Promise = global.Promise;

module.exports = mongoose;