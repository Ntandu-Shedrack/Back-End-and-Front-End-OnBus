const express = require('express');
const Buses = require('../models/buses.models.js');
const router = express.Router();
const { getBuses, getBus, createBus, updateBus, deleteBus } = require('../controllers/buses.controller.js')

//get all
router.get("/", getBuses);

//get single
router.get("/:id", getBus);

//Add
router.post("/", createBus);

//Update
router.put("/:id", updateBus);

//Delete
router.delete("/:id", deleteBus);


module.exports = router;