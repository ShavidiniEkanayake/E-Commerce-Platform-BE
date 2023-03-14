const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserProductSchema = new Schema({
    userId: {
        type: String
    },
    product: {
        type: String
    },
    newPrice: {
        type: String
    }
})


module.exports = mongoose.model("UserProduct", UserProductSchema);