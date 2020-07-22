const request = require("request")
const cheerio = require("cheerio")
const axios = require('axios')
const fs = require("fs")
const writeStream = fs.createWriteStream("post.csv")


request("https://www.fairprice.com.sg/category/beer-wine-spirits", (err, res, html) => {
    if (!err && res.statusCode == 200) { //200 successful http response
        // console.log(html);
        const $ = cheerio.load(html);
        // ITEM NAME
        const siteItem =  $(`.sc-1bsd7ul-0.dyhHCc`)
        console.log(siteItem.text());
        // // ITEM PRICE
        // const sitePrice = $(".sc-1bsd7ul-0.dQYxgv")
        // console.log(sitePrice.text());
        writeStream.write(`${siteItem.text()},", " \n`)
    }
})

//axios will get te content
// axios.get("https://www.fairprice.com.sg/category/infant-formula--1")
//     .then(resp => {
//         // get
//         let $ = cheerio.load(resp.data)
//         let x = $(".product-container")[0] //returns an array of all
//         // get price
//         let price = $("div[data-testid=product]").children().eq(1).children().eq(0).children().eq(0).children().eq(0).text()
//         console.log(price)
//         //get item name
//         let name = $("div[data-testid=product]").children().eq(1).children().eq(1).children().eq(0).text()
//         console.log(name)
//     })
    