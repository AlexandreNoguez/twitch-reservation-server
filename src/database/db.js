require("dotenv").config();
const mongoose = require("mongoose");
// const { MongoClient, ServerApiVersion } = require('mongodb');

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const DB_CLUSTER = process.env.DB_CLUSTER;
// const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.giyap1w.mongodb.net/?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);





mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_CLUSTER}.giyap1w.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conexão estabelecida")
    })
    .catch(err => {
        console.error(err)
    })

mongoose.Promise = global.Promise;

module.exports = mongoose;