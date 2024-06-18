const express = require('express');
const router = express.Router();
const { getBuses, getBus, createBus, updateBus, deleteBus } = require('../controllers/buses.controller');

// Get all buses
router.get("/api/buses", getBuses);

// Get single bus by id
router.get("/api/buses/:id", getBus);

// Add new bus
router.post("/api/buses", createBus);

// Update bus by id
router.put("/api/buses/:id", updateBus);

// Delete bus by id
router.delete("/api/buses/:id", deleteBus);

module.exports = router;
