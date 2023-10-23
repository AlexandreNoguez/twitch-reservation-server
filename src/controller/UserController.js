const User = require("../models/Users");

const createNewUser = async (req, res) => {
    // console.log("req.body", req.body);
    // console.log("User", User);
    try {
        const { user_name, user_rating, user_login, user_password } = req.body;

        let userAlreadyExists = await User.findOne({ user_login })

        if (userAlreadyExists) {
            return res.status(400).json({ msg: 'Usuário já existe' })
        }

        if (!user_name || !user_rating || !user_login || !user_password) {
            return res.status(400).send("Campos não foram preenchidos");
        }

        const user = await User.create({
            user_name,
            user_rating,
            user_login,
            user_password,
        })

        user_password = undefined;

        // console.log(user);
        return res.status(201).send(user)
    } catch (error) {
        console.error(error.message);
    }
}

module.exports = {
    createNewUser
}