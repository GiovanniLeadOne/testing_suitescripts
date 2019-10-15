'use strict';

var should = require('should'),
    nsmockup = require('nsmockup');

var path_userevent = 'app/user_event.js'
var path_customerJSON = "app/customer.json";

describe("<Unit Test - NetSuite User Event>", function() {
    this.timeout(5000);
    //ruta del archivo user event y la declaracion 
    let opts = {        
        name: 'user_event',
        files: [path_userevent],
        functions:{
            beforeLoad: 'beforeLoad'
        },
        records: ['customer']
    };

    beforeEach(done => {
        let metadata =[path_customerJSON],
            records = {'customer': path_customerJSON};

    nsmockup.init({records, metadata}, done)
    })

    describe("User Event Context Create", function() {
        it('Acess File Script Event User', () => {
            nsmockup.createUserEvent(opts, (ctx) => {
                let context = ctx.nlapiGetContext();
                should(ctx.beforeLoad).be.ok();
                should(context).be.ok();
                

            });
        });
        afterEach(done => {
            nsmockup.destroy(done)});    
    });
});