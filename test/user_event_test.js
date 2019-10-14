'use strict';

var should = require('should'),
    nsmockup = require('nsmockup');

var path_userevent = 'app/user_event.js'

describe("<Unit Test - NetSuite User Event>", function() {
    
    //ruta del archivo user event y la declaracion 
    let opts = {
        name: 'user_event',
        files: [path_userevent],
        functions:{
            beforeLoad: user_event.beforeLoad
        },
        record: 'customer'
    }

    describe("User Event Context Create", function() {
        it('user event set value phone call', done => {
            nsmockup.createUserEvent(opts, (ctx) => {
                should(ctx.user_event).be.ok();
            });
        });
    });
});