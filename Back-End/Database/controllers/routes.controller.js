const mongoose = require('mongoose');
const Routes = require('../models/routes.model');

const getRoutes = async (req, res) => {
    try {
        const routes = await Routes.find({});
        res.status(200).json(routes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRoute = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        const route = await Routes.findById(id);
        if (!route) {
            return res.status(404).json({ message: 'Bus not found' });
        }
        res.status(200).json(route);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createRoute = async (req, res) => {
    try {
        const route = await Routes.create(req.body);
        res.status(200).json(route);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateRoute = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        const route = await Routes.findByIdAndUpdate(id, req.body, { new: true });

        if (!route) {
            return res.status(404).json({ message: "Bus not found" });
        }

        res.status(200).json(route);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteRoute = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid ID format' });
        }
        const route = await Routes.findByIdAndDelete(id);

        if (!route) {
            return res.status(404).json({ message: "Bus not found" });
        }
        res.status(200).json({ message: "Bus deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getRoutes,
    getRoute,
    createRoute,
    updateRoute,
    deleteRoute
};
