const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs")
const { secret } = require("../config/auth.json")

const User = require("../models/Users");

const login = async (req, res) => {
    try {
        const { user_login, user_password } = req.body;

        const user = await User.findOne({ user_login });

        if (!user) {
            return res.status(401).send({ msg: "Usuário ou senha não encontrado" });
        }

        const checkPassword = await bcrypt.compare(user_password, user.user_password)

        if (!checkPassword) {
            return res.status(401).send({ msg: "Usuário ou senha não encontrado" })
        }

        const token = jwt.sign({
            user_id: user._id
        },
            secret,
            { expiresIn: "8h" }
        );

        res.status(200).send(token);

    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}

module.exports = {
    login,
}