const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    // category: {
    //     type: String,
    // },
    price: {
        type: String,
    },
    avalilableQTY: {
        type : Number,
    },
    hash: {
        type : String
    },
    discount: {
        type:String
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

module.exports = mongoose.model("Product", ProductSchema);

// const Product = mongoose.model("Product",ProductSchema);

// export default Product