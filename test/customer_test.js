'use strict';

var should = require('should');
var nsmockup = require('nsmockup');

var _dirnameCustomer = "app/customer.json"
/**
 * Test Suitelet
 */
 describe('<Unit Test - Netsuite Context API>', function () {
  describe('SuiteScript API - nlapiGetUser:', () => {
        it('get-user current "customer"', done => {
          let opt = {
              metadata: [':customer'],
              records: {
                  'customer': _dirnameCustomer
              },
              current: {
                  user: {
                      internalid: 22,
                      type: 'customer'
                  }
              }                        
          };
          nsmockup.init(opt, (err) => {
              if (err) return done(err);

              var id = nlapiGetUser();
              should(id).be.equal(22);

              nsmockup.destroy(done);
          });
      });
    });
});