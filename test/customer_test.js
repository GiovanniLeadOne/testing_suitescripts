'use strict';

var should = require('should'),
    nsmockup = require('nsmockup'),
    fs = require('fs'),
    path = require('path');

var base = "app/customer.json";
/**
 * Test Suites
 */
var customerpath = path.resolve(base),
                customerjson = JSON.parse(fs.readFileSync(customerpath));

describe('<Unit Test - Netsuite Customer JSON>', function () {
    describe('SuiteScript Practice - nlapiLoadRecord:', () => {              

        it('get-user current "customer"', done => {
            let opts = {
                metadata: [':customer'],
                records: {
                    'customer': base
                },
                current: {
                    user: {id: 22, type:'customer'}
                }                
            };
            nsmockup.init(opts, (err) => {
                if (err) return done(err);

                let id = nlapiGetUser();
                should(id).be.equal('22');
                //show terminal message
                nlapiLogExecution("DEBUG", customerjson)
                nsmockup.destroy(done);
            });
        });

    });
});