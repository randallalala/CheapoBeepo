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
    shops: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "shop",
    }]
})

const Item = mongoose.model("Item", itemSchema)
module.exports = Item;