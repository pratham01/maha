
const assert = require('chai').assert;
const Product = require("../src/model/product");
const catalouge = require('../src/model/catalouge');

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
});


describe("Catalouge",()=>{
    it('get size of catalouge',()=>{
        assert.equal(catalouge.getCatalogue().length, 4);
    });
    it('check Rolex watch has discount or not',()=>{
        let product = catalouge.getCatalogue()[0];
        assert.equal(product._discount, '3 for 200');
    });
});
