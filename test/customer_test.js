'use strict';

var should = require('should');
var expect = require('chai').expect;
var nsmockup = require('nsmockup');

var _dirnameCustomer = "app/customer.json"
/**
 * Test Suitelet
 */
 var done;
 describe('Unit Test Netsuite -Record', function()
 {
   before(done = function(){
      // map record types
       let records = {
              'customer': _dirnameCustomer 
          };

      // start database simulation
      nsmockup.init({records, server: true}, done);
    });

    describe("Record", function() 
    {
        let recordcustomer = 'customer'
        it("Load by id", function()
        {
           expect(1+1).to.equal(2) 
        });
        return done();
    });
 });