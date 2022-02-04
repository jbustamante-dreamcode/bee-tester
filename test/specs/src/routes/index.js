const chai = require('chai');
const rewire =require('rewire');
const rewiremock = require('rewiremock').default;
const {globalmock}= require('../../../mocks');

const {expect} = chai;

/*
function globalmock (){
    rewiremock('express').with({
        Router: () =>{
            return{
                use:(expose,route) => {
                    return { route, expose}
                }, 
                route : (expose) => {
                    return {
                        post: (params) =>{
                            return params;
                        },
                        get: (params) =>{
                        return params;
                        },
                    }
                },
                router: (param) => {
                    return param;
                }
            
            }
        }
    });
}*/

function indexRouteTestFunction(done) {
    rewiremock.enable();
    globalmock();
    const health=rewire('../../../../src/routes/health');
    const routesIndex=rewire ('../../../../src/routes/index');
    expect(routesIndex).to.be.a('object').that.have.property('use');
    expect(routesIndex).to.be.a('object').that.have.property('route');
    expect(routesIndex).to.be.a('object').that.have.property('router');
    expect(routesIndex.router).to.be.a('function');
    expect(routesIndex.use('./health',health)).to.contain.property('route');
    expect(routesIndex.use('./health',health).expose).deep.equal('./health');
    expect(routesIndex.use).to.be.a('function');
    done();
    rewiremock.disable();    
}

describe('src/routes/index.js', () =>{
    context('property check', ()=>{
        it('execute test function properly', (done) => {
            indexRouteTestFunction(done);
        })
    })
})