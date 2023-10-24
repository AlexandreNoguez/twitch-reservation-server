const UserReservation = require("../models/UserReservation");
// const Estabilishment = require("../models/Establishment");
// const User = require("../models/Users");


const createUserReservation = async (req, res) => {
    const {
        estabilishment_id,
        user_id,
        start_reservation,
        end_reservation
    } = req.body;

    try {
        let createReservation = await UserReservation.create({
            estabilishment_id,
            user_id,
            start_reservation,
            end_reservation,
        })

        return res.status(201).send(createReservation);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}

const getUserReservation = async (req, res) => {
    try {
        const findReservations = await UserReservation.find();
        res.status(200).send(findReservations)
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}

const updateReservations = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            estabilishment_id,
            user_id,
            start_reservation,
            end_reservation
        } = req.body;

        const reservationObj = {
            estabilishment_id,
            user_id,
            start_reservation,
            end_reservation,
        }

        const updatedReservation = await UserReservation.findByIdAndUpdate({
            _id: id
        },
            reservationObj,
            { new: true }
        )

        if (!updatedReservation) {
            return res.status(401).send({ msg: "Reserva não encontrada" })
        }

        updatedReservation.save(id);
        return res.status(200).send(updatedReservation)
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}

const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const userReservation = UserReservation.findById({ _id: id });

        if (!userReservation) {
            return res.status(401).send({ msg: "Reserva não encontrada" })
        }

        await userReservation.findOneAndDelete({ _id: id });

        res.status(200).send({ msg: "Reserva removida com sucesso." });
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);

    }
}

module.exports = {
    createUserReservation,
    getUserReservation,
    updateReservations,
    deleteReservation
}