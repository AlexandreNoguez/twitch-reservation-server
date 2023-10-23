const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { v4: uuid } = require("uuid")

const UserSchema = new mongoose.Schema(
    {
        // reservation_id: {
        //     type: String,
        //     default: function genUUID() {
        //         uuid.v1()
        //     }
        // },
        hotel_id: {
            type: String,
            require: true
        },
        user_id: {
            type: Number,
            require: true
        },
        start_reservation: {
            type: Number,
            require: true
        },
        end_reservation: {
            type: Number,
            require: true
        },

    }, { timestamps: true }
);

UserSchema.pre('save', async (next) => {
    const hash = await bcrypt.hash(this.user_password, 10);
    this.user_password = hash;
    next();
});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;