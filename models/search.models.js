const mongoose = require("mongoose")
const Schema = mongoose.Schema

const searchSchema = Schema({
    itemName: String,
    price: Number,
})

const Search = mongoose.model("Search", searchSchema)
module.exports = Search;