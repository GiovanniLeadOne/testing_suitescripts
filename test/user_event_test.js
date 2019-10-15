'use strict';

var should = require('should'),
    nsmockup = require('nsmockup');

var path_userevent = 'app/user_event.js'
var path_customerJSON = "app/customer.json";

describe("<Unit Test - NetSuite User Event>", function() {
    
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
        it('user event set value phone call', done => {
            nsmockup.createUserEvent(opts, (ctx) => {
                should(ctx.beforeLoad).be.ok();
            });
        });
    });
});