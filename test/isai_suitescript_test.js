const {loadSuiteScriptModule, NRecord, NLog, NHttps} = require('netsumo');

let Runtime = require('./Runtime');
console.log(Runtime);
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

var path_ue_isai = "app/isai_suitescript.js";
const url_api_hs= 'https://api.hubapi.com/';

const FulfilmentUserEventModule = loadSuiteScriptModule(path_ue_isai)

describe("Test Records Isai NetSuite & HubSpot" , () => {            
    it("Get URL API HubSpot", () => {   
        chai.request(url_api_hs)
        .get('')
        .end(function(err,res) {
            console.log(res.body)
            expect(res).to.have.status(200);
        });           
    });

    describe("Records" , () => {
            //create record for testing
            var record = new NRecord();
            var log = new NLog();
            var https = new NHttps();

            const fulfilmentUserEvent = FulfilmentUserEventModule({
                "N/record":record,
                "N/log":log,
                "N/https":https,         
                "N/runtime": Runtime              
            });
            
            // create opportunity record
            var oppCreate = record.create({
                type: 'opportunity',
                id: 1226,
                defaultValues: {
                    companyid:"30260",
                    entity:"30260",
                    entitystatus:"7",
                    expectedclosedate:"10/18/2019",
                    projectedtotal:"171.00"

                }
            })
        
        //Execute the afterSubmit method, passing in our context
        fulfilmentUserEvent.afterSubmit({
            type:'opportunity',
            UserEventType:{
            CREATE:'create'
        },
            newRecord: oppCreate
        });
        it("entitistatus is not null" , () => {
            expect(oppCreate.getValue('entitystatus')).to.not.be.null 
        })
    })
})