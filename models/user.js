const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    pass: {
        type: String
    },
    product: {
        type: String
    },
    newPrice: {
        type: String
    }
    // provider: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    // image: {
    //     type: String,
    // }
})

module.exports = mongoose.model("User", UserSchema);