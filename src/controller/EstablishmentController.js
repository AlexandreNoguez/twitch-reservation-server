const Estabilishment = require("../models/Establishment");

const createNewEstablishment = async (req, res) => {
    try {
        const { establishment_name, establishment_rating, establishment_address, establishment_price
        } = req.body

        if (!establishment_name || !establishment_rating || !establishment_address || !establishment_price) {
            return res.status(400).send("Campos não foram preenchidos");
        }

        let estabilishmentAlreadyExists = await Estabilishment.findOne({ establishment_address })

        if (estabilishmentAlreadyExists) {
            return res.status(400).json({ msg: 'Estabelecimento já cadastrado' })
        }


        const establishment = await Estabilishment.create({
            establishment_name, establishment_rating, establishment_address, establishment_price
        })

        return res.status(201).send(establishment)

    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}

const listAllEstabilishments = async (req, res) => {
    try {
        const listAllEstabilishment = await Estabilishment.find();

        return res.status(200).send(listAllEstabilishment);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}

const estabilishmentUpdate = async (req, res) => {
    try {

        const { id } = req.params;
        const { establishment_name, establishment_rating, establishment_address, establishment_price } = req.body;

        const estabilishmentDetails = {
            establishment_name, establishment_rating, establishment_address, establishment_price
        }

        const updatedEstabilishment = await Estabilishment.findByIdAndUpdate({
            _id: id
        },
            estabilishmentDetails,
            { new: true }
        )

        updatedEstabilishment.save(id);

        return res.status(200).send(updatedEstabilishment)
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}

const deleteEstabilishment = async (req, res) => {
    try {
        const { id } = req.params;
        const estabilishment = Estabilishment.findById({ _id: id })
        if (!estabilishment) {
            return res.status(401).send({ msg: "Estabelecimento não encontrado." })
        }

        await estabilishment.findOneAndDelete({ _id: id });
        return res.status(200).send({ msg: "Estabelecimento removido com sucesso!" })
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
}


module.exports = {
    createNewEstablishment,
    listAllEstabilishments,
    estabilishmentUpdate,
    deleteEstabilishment
}