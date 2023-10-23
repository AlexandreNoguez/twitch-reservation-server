const mongoose = require("../database/db");
const bcrypt = require("bcryptjs");
const { v4: uuid } = require("uuid")

const UserSchema = new mongoose.Schema(
    {
        // user_id: {
        //     type: String,
        //     default: function genUUID() {
        //         uuid.v1()
        //     }
        // },
        user_name: {
            type: String,
            require: true
        },
        user_rating: {
            type: Number,
            require: true
        },
        user_login: {
            type: String,
            require: true,
            index: {
                unique: true
            }
        },
        user_password: {
            type: String,
            require: true
        },

    }, { timestamps: true }
);

UserSchema.pre('save', async function (next) {
    try {
        let user = this;

        if (!user.user_password) {
            return next();
        }

        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }

            bcrypt.hash(user.user_password, salt, (err, hash) => {
                if (err) {
                    return next(err);
                }

                user.user_password = hash;
                console.log("user", user);

                next();
            });
        });
    } catch (error) {
        console.error(error);
    }

});

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;