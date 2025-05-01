const {Schema} = require("mongoose");

const PositionsSchema = new Schema({
    email: String,
    username: String,
    password: String,
});

module.exports = {PositionsSchema};