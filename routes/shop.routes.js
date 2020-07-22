const router = require("express").Router();
const Shop = require("../models/shop.model");

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
        .then((shops) => {
            // console.log(shops);
            res.render("shops/review", {
                shops,
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

// CREATE GET
router.get("/create", (req, res) => {
    // console.log("create shop-get");
    res.render("shops/create");
});

// CREATE POST
router.post("/create", (req, res) => {
    console.log(req.body);
    let shopData = {
        shopname: req.body.shopname,
        location: req.body.location,
    };
    let newshop = new Shop(shopData);
    newshop
        .save()
        .then(() => {
            console.log("new shop saved");
            res.redirect("/shops/create");
        })
        .catch((err) => {
            console.log(err);
        });
});

// DELETE
router.post("/delete/:id", (req, res) => {
    Shop.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/shops/review");
        })
        .catch((err) => {
            console.log(err);
        });
});

//  UPDATE GET
router.get("/edit/:id", (req, res) => {
    Shop.findById(req.params.id)
        .then((shop) => {
            console.log(shop);
            res.render("shops/edit", { 
                shop
            });
        })
        .catch((err) => {
            console.log(err);
        })
});

//  UPDATE POST
router.post("/edit/:id", (req, res) => {
    console.log(req.body);
    Shop.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            console.log("completed");
            res.redirect("/shops/review");
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;