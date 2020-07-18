const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shopSchema = Schema({
    shopname: String,
    location: String, 
})

const Shop = mongoose.model("Shop", shopSchema)
module.exports = Shop;