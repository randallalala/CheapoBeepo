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
        .populate("shop")
        .then((items) => {
            // console.log(items);
            res.render("items/review", {
                items,
            });
            // res.send(items)
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
    // console.log(shops);
});

// CREATE POST
router.post("/create", async (req, res) => {
    try {
        let {
            itemName,
            price,
            quantity,
            unit,
            shop,
        } = req.body;
        console.log(req.body);
        let newitem = new Item({
            itemName,
            price,
            quantity,
            shop,
        });
        if (req.body.unit == "grams") {
            newitem.unit = "grams";
        } else if (req.body.unit == "ounces") {
            newitem.unit = "ounces";
        } else if (req.body.unit == "millilitres") {
            newitem.unit = "millilitres";
        }
        // console.log(unit);
        // console.log(newitem);
        let saveditem = await newitem.save();
        // console.log("new item saved");
        if (saveditem) {
            res.redirect("/create");
        }
        // res.send(newitem)
    } catch (error) {
        console.log(error);
    }
});

//  UPDATE GET

router.get("/edit/:id", async (req, res) => {
    // let uom = ["Select One", "Grams", "Ounces", "mL"]
    let item = await Item.findById(req.params.id)
    let shops = await Shop.find()
    res.render("items/edit", {
        item,
        shops
        // uom // parse in for edit.ejs to make less complicated
    });
});

//  UPDATE POST
router.post("/edit/:id", async (req, res) => {
    // console.log(req.body);
    try {
        await Item.findByIdAndUpdate(req.params.id, req.body)
        // console.log(req.body);
        // console.log("edited");
            res.redirect("/review");
    } catch (error) {
        console.log(error);
    }
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

// SEARCH SPECIFIC ITEMS
router.get("/search", async (req, res) => {
    // console.log(req.query.search);
    try {
        let searched = (req.query.search);
        let totalResults = await Item.find().populate("shop");
        let searchResults = totalResults.filter(item => {
            // console.log(parseFloat(item.price).includes(req.query.search));
            return item.itemName.toLowerCase().includes(req.query.search) ||
                item.shop.shopname.toLowerCase().includes(req.query.search) ||
                item.shop.location.toLowerCase().includes(req.query.search);
        });
        res.render("items/results", {
            searched,
            searchResults,
            // res.send(searchResults)
        });
    } catch (err) {
        console.log(err);
    };
});


module.exports = router;

// ------------------------------- NOTES AND TESTS
// let str = "mushroom"
// let regex = new RegExp("mushro", "i")
// console.log(regex);
// console.log(regex.test(str));

// ----------------- PSEUDO CONVERSION

/*
function convert() {
    
    if item unit = ounces
    let convqty =  item quantity /  item quantity * 2
    let convprice =  item price /  item quantity * 2
    
    if item unit = grams
    let convqty =  item quantity /  item quantity * 100
    let convprice =  item price /  item quantity * 100
    
    if item unit = mL
    let convqty =  item quantity /  item quantity * 100
    let convprice =  item price /  item quantity * 100
    
    return convqty && convprice
    
}
*/


// ----------------- OLD CODES


// // BACKUP SPECIFIC ITEMS SEARCH
// router.get("/search", (req, res) => {
//     // console.log(req.query.search);
//     let searchresult = (req.query.search)
//     Item.find({
//             // itemname from model schema
//             $or: [{
//                     itemName: new RegExp(req.query.search, "i"),
//                 },
//                 {
//                     price: {
//                         $gt: req.query.price,
//                     },
//                 },
//                 {
//                     location: new RegExp(req.query.search, "i"),
//                 },
//             ],
//         })
//         .then((results) => {
//             // console.log(results);
//             res.render("items/results", {
//                 results,
//                 searchresult
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// GET UPDATE
// router.get("/edit/:id", (req, res) => {
//     // let uom = ["Select One", "Grams", "Ounces", "mL"]
//     Item.findById(req.params.id)
//         .then((item) => {
//             console.log(item);
//             res.render("items/edit", {
//                 item,
//                 // uom // parse in for edit.ejs to make less complicated
//             });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

//  UPDATE POST
// router.post("/edit/:id", (req, res) => {
//     // console.log(req.body);
//     Item.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => {
//             console.log("amended");
//             res.redirect("/review");
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });