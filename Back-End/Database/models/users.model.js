const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoosePaginate = require('mongoose-paginate-v2');

const UsersSchema = new Schema(
    {
        name: {
            type: String
        },
        username: {
            type: String
        },
        email: {
            type: String
        },
        password: {
            type: String
        }
    },
    {
        timestamps: true,
    }
);

UsersSchema.plugin(mongoosePaginate);
const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;
