const request = require("request")
const cheerio = require("cheerio")
const axios = require('axios')
const fs = require("fs")
const writeStream = fs.createWriteStream("post.csv")
const convert = require('convert-units')

const mongoose = require("mongoose");
require("dotenv").config();

// // seed into mongodb
// mongoose.Promise = Promise;
// mongoose
//     .connect(process.env.MONGODBLIVE, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useCreateIndex: true,
//         useFindAndModify: false,
//     })
//     .then(() => {
//         console.log("mongodb is running!");
//     })
//     .catch((e) => {
//         console.log(e);
//     });



// // AXIOS GET NTUC WEBSITE
// axios.get("https://www.fairprice.com.sg/category/infant-formula--1")
//     .then(resp => {
//         // get
//         let $ = cheerio.load(resp.data);
//         //returns an object of objects of the first some number loaded items
//         let x = $(".product-container");
//         console.log("length of received products", x.length);
//         let prices = [];
//         let names = [];
//         let qtys = [];
//         for (let i = 0; i < x.length; i++) {
//             // price
//             prices.push(x[i]
//                 .children[0].children[0]
//                 .children[1].children[0]
//                 .children[0].children[0]
//                 .children[0].children[0]
//                 .data
//             );
//             // name
//             names.push(x[i]
//                 .children[0].children[0]
//                 .children[1].children[1]
//                 .children[0].children[0]
//                 .data
//             );
//             // qty
//             qtys.push(x[i]
//                 .children[0].children[0]
//                 .children[1].children[1]
//                 .children[1].children[0]
//                 .children[0].children[0]
//                 .data
//             );
//         }

//         console.log(prices);
//         prices = prices.map(price => parseFloat(price.substring(1)));
//         console.log("original strings");
//         console.log(qtys);
//         // get rid of qty multipliers (e.g. "4 x 800g")
//         let qtyMults = qtys.map(qty => {
//             let split = qty.split(" ");
//             return split.length > 1 ? parseInt(split[0]) : 1;
//         });
//         let qtyNumbers = qtys.map(qty => parseFloat(qty.match(/\d+.?\d+/)[0]));
//         let qtyUnits = qtys.map(qty => qty.match(/[a-zA-Z]+$/)[0]);
//         // convert everything to grams
//         qtyNumbers = qtyNumbers.map((qty, i) => {
//             return convert(qty * qtyMults[i]).from(qtyUnits[i]).to('g');
//         });
//         console.log("numbers only");
//         console.log(qtyNumbers);
//         let items = [];
//         // it's inefficient to go again 
//         for (let i = 0; i < x.length; i++) {
//             items.push({
//                 itemName: names[i],
//                 price: prices[i],
//                 quantity: qtyNumbers[i],
//                 unit: "grams",
//                 __v: 0
//             });
//         }


//         Item.deleteMany({})
//             .then(() => {
//                 Item.create(items)
//                     .then(created => {
//                         console.log(created);
//                         mongoose.disconnect(() => console.log("end"));
//                     })
//                     .catch(err => {
//                         console.log(err)
//                     })
//             })

//         // todo: import Item model somewhere on top
//         // create a new Item() and save it for each item in 'items' array
//     })
//     .catch(err => console.log(err));


// seed into mongodb
// mongoose.Promise = Promise;
mongoose
    .connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => {
        console.log("mongodb is running!");
    })
    .catch((e) => {
        console.log(e);
    });



// AXIOS GET 
axios.get("https://coldstorage.com.sg/meat-seafood")
    .then(resp => {
        // get
        let $ = cheerio.load(resp.data);
        //returns an object of objects of the first some number loaded items
        let x = $(".view-product-list");
        console.log("length of received products", x.length);
        let names = [];
        console.log(x[1].children(0).eq().children(0).eq()
            .children[1].children[0]
            .children[0].children[0]
            // .children[2].children[2]
            .text);
     /*
        for (let i = 0; i < x.length; i++) {
            // price
            names.push(x[i]
                .children[1].children[0]
                // .children[1].children[0]
                // .children[0].children[1]
                // .children[0]
                .data
                );
                console.log(names);
        }
*/
        // console.log(prices);
        // prices = prices.map(price => parseFloat(price.substring(1)));
        console.log("original strings");
        console.log(names);
        // console.log(qtys);
        // // get rid of qty multipliers (e.g. "4 x 800g")
        // let qtyMults = qtys.map(qty => {
        //     let split = qty.split(" ");
        //     return split.length > 1 ? parseInt(split[0]) : 1;
        // });
        // let qtyNumbers = qtys.map(qty => parseFloat(qty.match(/\d+.?\d+/)[0]));
        // let qtyUnits = qtys.map(qty => qty.match(/[a-zA-Z]+$/)[0]);
        // convert everything to grams
        // qtyNumbers = qtyNumbers.map((qty, i) => {
            // return convert(qty * qtyMults[i]).from(qtyUnits[i]).to('g');
        // });
        // console.log("numbers only");
        // console.log(qtyNumbers);
        let items = [];
        // it's inefficient to go again 
        for (let i = 0; i < x.length; i++) {
            items.push({
                itemName: names[i],
                // price: prices[i],
                // quantity: qtyNumbers[i],
                // unit: "grams",
                // __v: 0
            });
        }
        // Item.deleteMany({})
        //     .then(() => {
        //         Item.create(items)
        //             .then(created => {
        //                 console.log(created);
        //                 mongoose.disconnect(() => console.log("end"));
        //             })
        //             .catch(err => {
        //                 console.log(err)
        //             })
        //     })
        // todo: import Item model somewhere on top
        // create a new Item() and save it for each item in 'items' array
    })
    .catch(err => console.log(err));

// axios.get("https://www.allforyou.sg/rice-noodles-oil")
//     .then(resp => {
//         // get
//         let $ = cheerio.load(resp.data);
//         //returns an object of objects of the first some number loaded items
//         let x = $(".row");
//         console.log("length of received products", x.length);
//         let names = [];
//         console.log(x[0].children[1].children[0].data
//             );
//      /*
//         for (let i = 0; i < x.length; i++) {
//             // price
//             names.push(x[i]
//                 .children[1].children[0]
//                 // .children[1].children[0]
//                 // .children[0].children[1]
//                 // .children[0]
//                 .data
//                 );
//                 console.log(names);
//         }
// */
//         // console.log(prices);
//         // prices = prices.map(price => parseFloat(price.substring(1)));
//         console.log("original strings");
//         console.log(names);
//         // console.log(qtys);
//         // // get rid of qty multipliers (e.g. "4 x 800g")
//         // let qtyMults = qtys.map(qty => {
//         //     let split = qty.split(" ");
//         //     return split.length > 1 ? parseInt(split[0]) : 1;
//         // });
//         // let qtyNumbers = qtys.map(qty => parseFloat(qty.match(/\d+.?\d+/)[0]));
//         // let qtyUnits = qtys.map(qty => qty.match(/[a-zA-Z]+$/)[0]);
//         // convert everything to grams
//         // qtyNumbers = qtyNumbers.map((qty, i) => {
//             // return convert(qty * qtyMults[i]).from(qtyUnits[i]).to('g');
//         // });
//         // console.log("numbers only");
//         // console.log(qtyNumbers);
//         let items = [];
//         // it's inefficient to go again 
//         for (let i = 0; i < x.length; i++) {
//             items.push({
//                 itemName: names[i],
//                 // price: prices[i],
//                 // quantity: qtyNumbers[i],
//                 // unit: "grams",
//                 // __v: 0
//             });
//         }


//         // Item.deleteMany({})
//         //     .then(() => {
//         //         Item.create(items)
//         //             .then(created => {
//         //                 console.log(created);
//         //                 mongoose.disconnect(() => console.log("end"));
//         //             })
//         //             .catch(err => {
//         //                 console.log(err)
//         //             })
//         //     })

//         // todo: import Item model somewhere on top
//         // create a new Item() and save it for each item in 'items' array
//     })
//     .catch(err => console.log(err));



// APPENDICES

// request("https://www.fairprice.com.sg/category/infant-formula--1", (err, res, html) => {
//     if (!err && res.statusCode == 200) { //200 successful http response
//         // console.log(html);
//         const $ = cheerio.load(html);
//         // ITEM NAME
//         const siteItem =  $(`.sc-1bsd7ul-0.dyhHCc`)
//         console.log(siteItem.text());
//         // // ITEM PRICE
//         // const sitePrice = $(".sc-1bsd7ul-0.dQYxgv")
//         // console.log(sitePrice.text());
//         writeStream.write(`${siteItem.text()} \n`)
//     }
// })
//     let result1 = $("div[data-testid=product]")
//     .children().eq(i)
//     .children().eq(1)
//     .children().eq(0).text()
// if (result1 !== "") {
//     items.push(result1)
// }