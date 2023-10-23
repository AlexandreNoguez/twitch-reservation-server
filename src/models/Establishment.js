const mongoose = require("mongoose");
const { v4: uuid } = require("uuid")

const EstablishmentSchema = new mongoose.Schema(
    {
        // hotel_id: {
        //     type: String,
        //     default: function genUUID() {
        //         uuid.v1()
        //     }
        // },
        establishment_name: {
            type: String,
            require: true
        },
        establishment_rating: {
            type: Number,
            require: true
        },
        establishment_address: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        },
        establishment_price: {
            type: Number,
            require: true
        },

    }, { timestamps: true }
);



const Establishment = mongoose.model("establishment", EstablishmentSchema);

module.exports = Establishment;