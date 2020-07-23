const express = require("express");
const mongoose = require("mongoose")
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();
require("dotenv").config()
const PORT = process.env.PORT

mongoose.Promise = Promise;
mongoose
    .connect(process.env.MONGODBLIVE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, // deprecated error
        useCreateIndex: true,
    })
    .then(() => {
        console.log("mongodb is running!");
    })
    .catch((e) => {
        console.log(e);
    });

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
    console.log(`running on ${PORT}`);
})