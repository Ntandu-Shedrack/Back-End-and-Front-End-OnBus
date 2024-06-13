const Buses = require('../models/buses.models.js');


const getBuses = async (req, res) => {

    try {
        const buses = await Buses.find({});
        res.status(200).json(buses);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getBus = async (req, res) => {
    try {
        const { id } = req.params;
        const buses = await Buses.findById(id);
        res.status(200).json(buses);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createBus = async (req, res) => {
    try {
        const buses = await Buses.create(req.body);
        res.status(200).json(buses);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateBus = async (req, res) => {
    try {
        const { id } = req.params;
        const buses = await Buses.findByIdAndUpdate(id, req.body);

        if (!buses) {
            return res.status(404).json({ message: "Bus not found" });
        }

        const updatedBus = await Buses.findById(id);
        res.status(200).json(updatedBus);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const deleteBus = async (req, res) => {
    try {
        const { id } = req.params;
        const buses = await Buses.findByIdAndDelete(id);

        if (!buses) {
            return res.status(404).json({ message: "Bus not found" });
        }
        res.status(200).json({ message: "Bus deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getBuses,
    getBus,
    createBus,
    updateBus,
    deleteBus
};