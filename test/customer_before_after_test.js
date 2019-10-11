'use strict'

var nsmockup = require('nsmockup'),
    should = require('should'),
    fs = require('fs'),
    path = require('path'),
    expect = require('chai').expect;;

//ruta del json ubicada en una carpeta
var pathCustomerJSON = "app/customer.json";

//Primero obtengo el archivo de dicha ruta y despues leo el archivo para poder convertirlo en JSON
var customerpath = path.resolve(pathCustomerJSON),
    customerjson = JSON.parse(fs.readFileSync(customerpath));

/*
    Test Suites Costumer
*/

describe("Test Connection whit JSON Success", function(){
    this.timeout(5000);
        before(done => {
            let metadata = [pathCustomerJSON],
                records = {
                'customer': pathCustomerJSON
            }
            nsmockup.init({records, metadata}, done);
        });//before
    describe("<Testing in NetSuite of JSON customer>", function (){

        it("costumer id not null", done => {
            expect(customerjson[0]["internalid"]).to.not.equal(null)

            return done();
        });

        after(done => {
            nsmockup.destroy(done)});
    });//Testing in NetSuite of JSON customer
});//Test Connection whit JSON Success