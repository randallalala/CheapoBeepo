const express = require("express");
const mongoose = require("mongoose")
const expressEjsLayouts = require("express-ejs-layouts");
const app = express();

require("dotenv").config()

mongoose.set('useCreateIndex', true); // deprecated error
mongoose.connect(
    process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
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

app.use("/", require("./routes/search.routes"))

// CREATE



app.listen(process.env.PORT, () => {
    console.log(`running on ${process.env.PORT}`);
})