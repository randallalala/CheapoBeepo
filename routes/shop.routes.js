const router = require("express").Router();
const Shop = require("../models/shop.models");

// MAIN SHOPS INDEX PAGE
// router.get("/", (req, res) => { // follows folder
//     Shop.find()
//         .then(shops => {
//             res.render("shops/index", {
//                 shops
//             })
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// REVIEW 
router.get("/review", (req, res) => {
    Shop.find()
        .then(shops => {
            console.log(shops);
            res.render("shops/review", {
                shops
            })
        })
        .catch(err => {
            console.log(err);
        })
})

// CREATE GET 
router.get("/create", (req, res) => {
    // console.log("create shop-get");
    res.render("shops/create")
});

// CREATE POST
router.post("/create", (req, res) => {
    console.log(req.body);
    let shopData = {
        shopname: req.body.shopname,
        location: req.body.location,
    }
    let newshop = new Shop(shopData)
    newshop.save()
        .then(() => {
            console.log("new shop saved");
            res.redirect("/create")
        })
        .catch(err => {
            console.log(err);
        })
})

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