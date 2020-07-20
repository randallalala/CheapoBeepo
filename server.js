const express = require("express");
const mongoose = require("mongoose")
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
require("dotenv").config()

mongoose.connect(
    process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true, // deprecated error
    },
    () => {
        console.log("Mongodb connected");
    })

app.use(express.static("public")); //look for static files in public folder
app.use(express.urlencoded({
    extended: true
})); //collects form data

app.set("view engine", "ejs")
app.use(expressEjsLayouts)

// MIDDLEWARE
app.use("/shops", require("./routes/shop.routes"))
app.use("/", require("./routes/item.routes"))


app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT}`);
})