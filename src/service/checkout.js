const catalogue = require('../model/catalouge');

exports.checkout = async function(req,res){
    let reqJSON = req.body;
    let map = await populateMap(reqJSON);
    let val = await calculatePrice(map);
    res.send({"price":val});
    res.end();
    return;
};

async function populateMap(reqJSON){
    let map = new Map();
    for(let i=0;i<reqJSON.length;i++){
        if(!map.has(reqJSON[i])){   
            map.set(reqJSON[i],1);
        } else{
            map.set(reqJSON[i], map.get(reqJSON[i])+1);
        }
    }
    return map;
}
async function calculatePrice(map){
    let finalPrice = 0;
    let catalougeProducts = catalogue.getCatalogue();
    for(let[key, value] of map){
        for(let itr =0;itr<catalougeProducts.length;itr++){
            if(catalougeProducts[itr]._id == key){
                let discount = catalougeProducts[itr]._discount;
                if(discount != undefined) {
                    discount = discount.split(" ");
                    if(value>=parseInt(discount[0])){
                        let tempFreq = value/parseInt(discount[0]);
                        finalPrice+=parseInt(tempFreq)* parseInt(discount[2]);
                        let remainingProduct = value - (parseInt(tempFreq)* parseInt(discount[0]));
                        finalPrice+=remainingProduct* parseInt(catalougeProducts[itr]._price);
                    }   else{
                        finalPrice+=value*parseInt(catalougeProducts[itr]._price);
                    }
                } else{
                    finalPrice+= value*parseInt(catalougeProducts[itr]._price);
                }
                break;
            }
        }
    }
    return finalPrice;
}