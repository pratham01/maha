
const assert = require("assert");
const Product = require("../src/model/product");


describe("Product", ()=>{
    let product = new Product(1,'abc',10);
    it('it should return product id',()=>{
        assert.equal(product._id, 1); 
    });
    it('it should return product price',()=>{
        assert.equal(product._price, 10); 
    });
    it('it should return product name',()=>{
        assert.equal(product._name, "abc"); 
    });

    it('it should return product discount',()=>{
        assert.equal(product._discount, undefined);
    });

    
})
