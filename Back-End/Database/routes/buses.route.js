const express = require('express');
const router = express.Router();
const { getBuses, getBus, createBus, updateBus, deleteBus } = require('../controllers/buses.controller');

// Get all buses
router.get("/", getBuses);

// Get single bus by id
router.get("/:id", getBus);



// Add new bus
router.post("/", createBus);

// Update bus by id
router.put("/:id", updateBus);

// Delete bus by id
router.delete("/:id", deleteBus);

module.exports = router;
