const router = require("express").Router();
const Search = require("../models/search.models");
// const search = document.getElementById("search")

// MAIN INDEX PAGE
router.get("/", (req, res) => {
    Search.find()
        .then(searches => {
            res.render("searches/index", {
                searches
            })
        })
        .catch((err) => {
            console.log(err);
        })
})


// REVIEW 
router.get("/review", (req, res) => {
    // console.log(req.params.id);
    Search.findById(req.params.id)
        .then(search => {
            console.log(search);
            res.render("searches/review", {
                search
            })
        })
        .catch(err => {
            console.log(err);
        })
})

// // CREATE GET 
// router.get("/create", async (req, res) => {

//     res.render("items/create", {items})
// });

// // CREATE POST
// router.post("/create", (req, res) => {
//     console.log(req.body);
//     let item = new Item(req.body)
//     item.save()
//         .then(() => {
//             console.log("item saved");
//             res.redirect("/")
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })

// // DELETE
// router.delete("/delete/:id", (req, res) => {
//     Item.findByIdAndDelete(req.params.id)
//     .populate("directors")
//         .then(() => {
//             res.redirect("/")
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })

// //  UPDATE GET
// router.get("/edit/:id", (req, res) => (
//     Item.findById(req.params.id)
//     .then(item => {
//         console.log(item);
//         res.render("items/edit", {
//             item
//         })
//     })
//     .catch(err => {
//         console.log(err);
//     })
// ))

// //  UPDATE POST
// router.post("/edit/:id", (req, res) => {
//     console.log(req.body);
//     Item.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => {
//             console.log("completed");
//             res.redirect("/")
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })

module.exports = router;