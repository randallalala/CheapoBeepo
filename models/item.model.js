const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemSchema = Schema({
    itemName: String,
    price: Number,
    quantity: Number,
    unit: {
        type: String,
        enum: ["grams", "ounces", "millilitres"],
        default: "grams",
    },
    shop: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Shop", // referring to a model
    }
})

const Item = mongoose.model("Item", itemSchema)
module.exports = Item;