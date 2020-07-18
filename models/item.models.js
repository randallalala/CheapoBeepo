const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemSchema = Schema({
    itemName: String,
    price: Number,
})

const Item = mongoose.model("Item", itemSchema)
module.exports = Item;