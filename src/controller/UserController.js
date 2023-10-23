const User = require("../models/Users");

const createNewUser = async (req, res) => {
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

        return res.status(201).send(user);
    } catch (error) {
        console.error(error.message);
    }
}

const listAllUsers = async (req, res) => {
    try {
        const listAllUsers = await User.find();
        // console.log(listAllUsers);
        return res.status(200).send(listAllUsers)

    } catch (error) {
        console.error(error);
    }
}

const userUpdate = async (req, res) => {
    try {
        const { id } = req.params;
        const { user_name, user_rating, user_login, user_password } = req.body;

        const userDetails = {
            user_name,
            user_rating,
            user_login,
            user_password
        }

        const updatedUser = await User.findByIdAndUpdate({
            _id: id
        },
            userDetails,
            { new: true }
        )

        updatedUser.save(id);
        return res.status(200).send(updatedUser)

    }
    catch (error) {
        console.error(error);
    }
}

const userDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const user = User.findById({ _id: id });

        if (!user) {
            return res.status(401).send({ msg: "Usuário não encontrado." })
        }

        await user.findOneAndDelete({ _id: id });

        return res.status(200).send({ msg: "Usuário removido com sucesso." })
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    createNewUser,
    listAllUsers,
    userUpdate,
    userDelete
}