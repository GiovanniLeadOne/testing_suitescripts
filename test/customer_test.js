'use strict';

var should = require('should'),
    nsmockup = require('nsmockup'),
    fs = require('fs'),
    path = require('path'),
    expect = require('chai').expect;

var base = "app/customer.json";
/**
 * Test Suites
 */
var customerpath = path.resolve(base),
    customerjson = JSON.parse(fs.readFileSync(customerpath));

describe('<Unit Test - Netsuite Customer JSON>', function () {
    describe('SuiteScript Practice - nlapiLoadRecord:', () => {              

        //pass the test if the file is in the path
        it('email customer is not null', done => {
            let opts = {
                metadata: [':customer'],
                records: {
                    'customer': base
                }                         
            };
            nsmockup.init(opts, (err) => {
                if (err) return done(err);
                                
                expect(customerjson[0]["email"]).to.not.equal(null);

                //show terminal message
                //nlapiLogExecution("DEBUG", customerjson[0]["email"])
                nsmockup.destroy(done);
            });
        });

        //pass the test if the file is in the path
        it('email equal for customer', done => {
            let opts = {
                metadata: [':customer'],
                records: {
                    'customer': base
                }                         
            };
            nsmockup.init(opts, (err) => {
                if (err) return done(err);
                
                should(customerjson[0]["email"]).be.equal('japo.japo@suiteplus.com');                
                nsmockup.destroy(done);
            });
        });

    });
});