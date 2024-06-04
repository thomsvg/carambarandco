const Blague = require("../models/blagues");

const blagueAuHasard = (array) => {
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

const controllerBlague = {
    random: async (req, res) => {
        const data = await Blague.findAll();
        console.log(data);
        const randomJoke = blagueAuHasard(data);
        res.status(200).json({ blague: randomJoke });
    },

    create: async (req, res) => {
        console.log(req.body);
        const data = await Blague.create(req.body);
        console.log(data);
        res.status(201).json({message: "Blague ajoutée.", data: req.body});
    },

    findAll: async (req, res) => {
        const data = await Blague.findAll();
        res.status(200).json({blagues: data});
    }
}

module.exports = controllerBlague;