const request = require("request")
const cheerio = require("cheerio")
const axios = require('axios')
const fs = require("fs")
const writeStream = fs.createWriteStream("post.csv")



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

request("https://www.fairprice.com.sg/category/infant-formula--1", (err, res, html) => {
    if (!err && res.statusCode == 200) { //200 successful http response
        // console.log(html);
        let $ = cheerio.load(html);
         // ITEM NAME
        let siteContainer = $("div[data-testid=product]").children()
        let items = []
        let prices = []
        
        siteContainer.each(function(i){ 
            items.push($("div[data-testid=product]").children().eq(i).children().eq(1).children().eq(0).text())
        })
        siteContainer.each(function(i){ 
            prices.push($("div[data-testid=product]").children().eq(i).children().eq(0).children().eq(0).children().eq(0).text())
        })

        // fs.writeFile("output.txt", JSON.stringify(items, prices, null, 4), function(err){
        //     if(err){
        //         console.log(err);
        //     } else (
        //         console.log("data added to file");
        //     )
        // })
        
        
        console.log(items);
        console.log(prices);

        

    }
    
    
})


// axios will get the content
// axios.get("https://www.fairprice.com.sg/category/infant-formula--1")
//     .then(resp => {
//         // get
//         let $ = cheerio.load(resp.data)

//         // for each of the product container..
//         // for (let i = 0; i < 57; i++) {

//             // let x = $(".product-container")[i] 

//             // get price
//             let price2 = $("div[data-testid=product]").children().eq(1).children().eq(0).children().eq(0).children().eq(0).text()
//             console.log(price)

//             //get item name
//             let name = $("div[data-testid=product]").children().eq(1).children().eq(1).children().eq(0).text()
//             console.log(name)
//         // }
//     }); 