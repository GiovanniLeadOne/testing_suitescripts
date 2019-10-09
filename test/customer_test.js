'use strict';
var should = require('should');
var nsmockup = require('nsmockup');

var base = "app"
/**
 * Test Suitelet
 */
 var done;
 describe('<Unit Test - Netsuite Record API>', function () {
  this.timeout(5000);

  before(done => {
      let metadata = [
              base + '/meta/customrecord_codeg.json',
              base + '/meta/customrecord_codeg_ids.json'
          ],
          records = {
              'customrecord_codeg': base + '/data/customrecord_codeg.json',
              'customrecord_codeg_ids': base + '/data/customrecord_codeg_ids.json'
          };
      nsmockup.init({records, metadata}, done);
  });
  describe('SuiteScript API - nlapiLoadRecord:', () => {
      let recType = 'customrecord_codeg';

      it('load by id', done => {
          let code = nlapiLoadRecord(recType, 1);
          should(code).have.instanceOf(nlobjRecord);
          should(code.getAllFields()).have.length(2);

          ['custrecord_type_id', 'custrecord_code_id'].forEach(f => {
              should(code.getFieldValue(f)).be.ok();
          });

          return done();
      }); 
    });
 });