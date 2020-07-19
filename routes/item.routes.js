const router = require("express").Router();
const Item = require("../models/item.models");

// MAIN ITEMS INDEX PAGE
router.get("/", (req, res) => {
    Item.find()
        .then(items => {
            res.render("items/index", {
                items
            })
        })
        .catch((err) => {
            console.log(err);
        })
})


// REVIEW 
router.get("/review", (req, res) => {
    Item.find()
        .then(items => {
            // console.log(items);
            res.render("items/review", {
                items
            })
        })
        .catch(err => {
            console.log(err);
        })
})

// CREATE GET 
router.get("/create", (req, res) => {
    // console.log("create item-get");
    res.render("items/create")
});

// CREATE POST
router.post("/create", (req, res) => {
    // console.log("create item-post");
    console.log(req.body);
    let itemData = {
        itemName: req.body.itemName,
        price: req.body.price,
    }
    let newitem = new Item(itemData)
    newitem.save()
        .then(() => {
            console.log("new item saved");
            res.redirect("/create")
        })
        .catch(err => {
            console.log(err);
        })
})

// // SEARCH - get and post required?
// router.get("/search", (req, res) => {
//     Item.find({"name" : new RegExp(req.query.searchString, 'i')})
//         .then(() => {
//             console.log("searching");
//             res.redirect("/") 
//         })
//         .catch(err => {
//             console.log(err);
//         })
// })


router.get("/search", (req, res) => {
    // console.log(req.query.search);
    Item.find({
            "itemName": new RegExp(req.query.search, "i") // itemname from model schema
        })
        .then((results) => {
            console.log(results);
            res.render("items/results", {
                results
            })
        })
        .catch(err => {
            console.log(err);
        })
})

// let str = "mushroom"
// let regex = new RegExp("mushro", "i")
// console.log(regex);
// console.log(regex.test(str));


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