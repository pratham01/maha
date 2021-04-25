const catalogue = require('../model/catalouge');

exports.checkout = async function(req,res){
    let reqJSON = req.body;
    let map =  new Map();
    reqJSON.forEach(i=>map.set(i, map.get(i) == undefined?1: map.get(i)+1));
    res.send({"price":await calculatePrice(map)});
    res.end();
    return;
};

async function calculatePrice(map){
    let finalPrice = 0;
    let catalougeProducts = catalogue.getCatalogue();
    for(let[key, value] of map){
        catalougeProducts.forEach(product=>{
            if(product._id == key){
                let discount = product._discount != undefined ? product._discount.split(" ") : Number.MAX_VALUE ;
                if( value>=parseInt(discount[0]))
                    finalPrice+=parseInt(value/parseInt(discount[0]))* parseInt(discount[2]) + (value % parseInt(discount[0]))* parseInt(product._price);
                 else
                    finalPrice+=value*parseInt(product._price);
            }
        });
    }
    return finalPrice;
}