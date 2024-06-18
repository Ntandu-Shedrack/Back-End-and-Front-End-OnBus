const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BusesSchema = new Schema(
    {
        busId: {
            type: Number,
            required: [true, "Enter bus ID"]
        },
        plateNumber: {
            type: String,
            required: [true, "Enter bus plate number"]
        },
        capacity: {
            type: Number,
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        seatLayout: {
            type: String,
            required: true
        },
        route: {
            type: String,
            required: true
        },
        fare: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true,
    }
);

const Buses = mongoose.model("Buses", BusesSchema);

module.exports = Buses;
