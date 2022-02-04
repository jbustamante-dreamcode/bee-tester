const chai = require('chai');
const expect = chai.expect;
const rewire = require('rewire');
const rewiremock = require('rewiremock').default;

function indexTestFunction(done) {
    const controllers= rewire('../../../../src/controllers/index');
    expect(controllers).to.be.a('object');
    expect(controllers).to.be.a('object').that.have.property('healthController');
    expect(controllers).to.be.a('object').that.have.property('orderController');
    expect(controllers).to.be.a('object').that.have.property('orderStatusController');
    done();    
}

describe('src/controllers/index/js', ()=>{
    it('execute function correctly',(done)=>{
        indexTestFunction(done);
    })
})




//const {healthController}=require('../../../../src/controllers');
/*
describe('controllers index.js unit test',()=>{
    context('testing exports', ()=>{

        it('healthController property');
    })
})*/