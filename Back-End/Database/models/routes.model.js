const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate-v2');

const RoutesSchema = new Schema(
    {
        routeID: {
            type: String
        },
        origin: {
            type: String
        },
        destination: {
            type: String
        },
        distance: {
            type: Number
        },
        duration: {
            type: Number
        }
    },
    {
        timestamps: true,
    }
);

RoutesSchema.plugin(mongoosePaginate);
const Routes = mongoose.model("Routes", RoutesSchema);

module.exports = Routes;
