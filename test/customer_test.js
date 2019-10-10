'use strict';

var should = require('should'),
    nsmockup = require('nsmockup');

var base = "app/customer.json"
/**
 * Test Suites
 */
describe('<Unit Test - Netsuite Context API>', function () {
    describe('SuiteScript API - nlapiGetUser:', () => {        

        it('get-user current "customer whit id 22"', done => {
            let opts = {
                metadata: [':customer'],
                records: {
                    'customer': base 
                },
                current: {
                    user: {
                        id: 22,
                        type: 'customer'
                    }
                }
            };
            nsmockup.init(opts, (err) => {
                if (err) return done(err);


                let id = nlapiGetUser();
                should(id).be.equal('22');

                nsmockup.destroy(done);
            });
        });        
    });
});