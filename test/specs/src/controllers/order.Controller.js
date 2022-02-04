const chai = require('chai');
const expect = chai.expect;
const rewire = require('rewire');
const rewiremock = require('rewiremock').default;


rewiremock('../models').with({
    waiter:
            {
                placeOrder: (order)=>{
                    return {
                        then:()=>{
                            return {
                                catch:()=>{
                                    return true;
                                }    
                            }
                            
                        },
                        
                    }
                    
                }
            }
            
        
    
});
describe('orderController',()=>{
    beforeEach(()=>{
        rewiremock.enable();
    });
    afterEach(()=>{
        rewiremock.disable();
    });
    
    context('tester', ()=>{
        it('add to be a function',()=>{
            var orderController = rewire('../../../../src/controllers/order.Controller');
            expect(orderController.tester).to.be.a('function');
        }),
        it('it should multiply X2',()=>{
            var orderController = rewire('../../../../src/controllers/order.Controller');
            expect(orderController.tester(4)).equals(8);
        })
        
    }),
    context('newOrder function', ()=>{
        
        it('newOrder to be a function',()=>{
            
            var orderController = rewire('../../../../src/controllers/order.Controller');
            expect(orderController.newOrder).to.be.a('function');
            
        }),
        it('it should return order',()=>{
            var orderController = rewire('../../../../src/controllers/order.Controller');
            let req = {
                body: {
                    dish: 'fish',
                    qty: 3,
                }
                
            };
            let res = {
                status:(params) =>{
                    return true;
                },
                json:(params) =>{
                    return true;
                }
                
            }
            expect(orderController.newOrder(req,res)).property('dish').equals('fish');
        })
        
    })
    
})
