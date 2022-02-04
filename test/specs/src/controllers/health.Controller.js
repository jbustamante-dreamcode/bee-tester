const chai = require('chai');
const expect = chai.expect;
const rewire = require('rewire');
const rewiremock = require('rewiremock').default;

var healthController = require('../../../../src/controllers/health.Controller');

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
                Router: (param) => {
                    return param;
                }
            
            }
        }
    });
}

describe('healthController',()=>{
    context('add', ()=>{
        it('it should add 2 numbers',()=>{
            expect(healthController.add(1,2)).equals(3);
        })
        it('add to be a function',()=>{
            expect(healthController.add).to.be.a('function');
        })
        it('it should add 2 letters',()=>{
            expect(healthController.add('a','b')).equals('ab');
        })
    }),
    context('status function', ()=>{
        function generalMock(done) {
            //rewiremock.enable();
            
            expect(healthController).to.be.a('object');
            //console.log(healthController.status());
            //expect(healthController).to.be.a('object').that.have.property('add');
            //expect(healthController.status).to.have.property(res);


            //console.log('sigue el done')
            done();
            //rewiremock.disable();

        }
        it('to be a function',()=>{
            expect(healthController.status).to.be.a('function');
        })
        it('execute function',(done)=>{
            generalMock(done);
        })
    })
})