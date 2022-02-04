const rewire = require('rewire');
const rewiremock = require('rewiremock').default;

function generalMock(done) {
    rewiremock.enable();
    rewiremock('./src/routes').with(() => ({
        health: 'health',
    }));
    rewire('../../app');
    done();
    rewiremock.disable();
    
}

describe('app.js', () =>{
    context('testing app.js',()=>{
        it('the file is invoked correctly',(done)=>{
            generalMock(done);
        })
    })
})