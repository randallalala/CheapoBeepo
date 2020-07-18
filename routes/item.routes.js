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
    console.log(req.params);
    Item.find()
        .then(items => {
            console.log(items);
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
            res.redirect("/create") //change to /items
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