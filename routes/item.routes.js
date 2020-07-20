const router = require("express").Router();
const Item = require("../models/item.model");
const Shop = require("../models/shop.model");

// MAIN ITEMS INDEX PAGE
router.get("/", (req, res) => {
    Item.find()
        .then((items) => {
            res.render("items/index", {
                items,
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

// REVIEW
router.get("/review", (req, res) => {
    Item.find()
        .then((items) => {
            // console.log(items);
            res.render("items/review", {
                items,
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

// CREATE GET
router.get("/create", async (req, res) => {
    let shops = await Shop.find();
    // console.log("create item-get");
    res.render("items/create", {
        shops,
    });
    console.log(shops);
});

// CREATE POST
router.post("/create", async (req, res) => {
    try {
        let {
            itemName,
            price,
            quantity,
            unit
        } = req.body;

        console.log(req.body);
        let newitem = new Item({
            itemName,
            price,
            quantity,
        });
        if (req.body.unit == "grams") {
            newitem.unit = "grams";
        } else if (req.body.unit == "ounces") {
            newitem.unit = "ounces";
        } else if (req.body.unit == "millilitres") {
            newitem.unit = "millilitres";
        }
        console.log(unit);
        let saveditem = await newitem.save();
        console.log("new item saved");
        if (saveditem) {
            res.redirect("/create");
        }
    } catch (error) {
        console.log(error);
    }
});

// // SEARCH SPECIFIC ITEMS
router.get("/search", (req, res) => {
    // console.log(req.query.search);
    Item.find({
            // itemname from model schema
            $or: [{
                    itemName: new RegExp(req.query.search, "i"),
                },
                {
                    price: {
                        $gt: req.query.price,
                    },
                },
            ],
        })
        .then((results) => {
            // console.log(results);
            res.render("items/results", {
                results,
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

//  UPDATE GET
router.get("/edit/:id", (req, res) => {
    // let uom = ["Select One", "Grams", "Ounces", "mL"]
    Item.findById(req.params.id)
        .then((item) => {
            console.log(item);
            res.render("items/edit", {
                item,
                // uom // parse in for edit.ejs to make less complicated
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

//  UPDATE POST
router.post("/edit/:id", (req, res) => {
    // console.log(req.body);
    Item.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            console.log("amended");
            res.redirect("/review");
        })
        .catch((err) => {
            console.log(err);
        });
});

// DELETE
router.post("/delete/:id", (req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => {
            res.redirect("/review");
        })
        .catch((err) => {
            console.log(err);
        });
});

module.exports = router;

// ------------------------------- NOTES AND TESTS
// let str = "mushroom"
// let regex = new RegExp("mushro", "i")
// console.log(regex);
// console.log(regex.test(str));