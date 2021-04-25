
const assert = require('chai').assert,
    chai = require('chai'),
    chaiHTTP = require('chai-http'),
    { expect } = chai;
const server = require('../src/server');

chai.use(chaiHTTP);
describe("Checkout ", ()=>{
    it('final price check',()=>{
        chai.request(server)
        .post("/checkout")
        .set('content-type', 'application/json')
        .send(['001','002', '001', '001', '001'])
        .end((err,res)=>{
            expect(err).to.be.null;
            expect(res).to.have.status(200);    
            assert.deepEqual(res.body, {"price":380});
        });
    });
   
});