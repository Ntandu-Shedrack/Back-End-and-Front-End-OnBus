const express = require('express');
const router = express.Router();
const { getRoutes, getRoute, createRoute, updateRoute, deleteRoute } = require('../controllers/routes.controller');

// Get all buses
router.get("/", getRoutes);

// Get single bus by id
router.get("/:id", getRoute);

// Add new bus
router.post("/", createRoute);

// Update bus by id
router.put("/:id", updateRoute);

// Delete bus by id
router.delete("/:id", deleteRoute);

module.exports = router;
