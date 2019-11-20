const { loadSuiteScriptModule, NRecord, NLog } = require('netsumo');

let Runtime = require('./Runtime');
let https = require('./https');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

var path_ue_isai = "app/ue_hs_isai.js";
const FulfilmentUserEventModule = loadSuiteScriptModule(path_ue_isai)

describe("Test Records Isai NetSuite & HubSpot", () => {
    describe("Create and Load Record, User Event Type is equal create", () => {
        //create record for testing
        var record = new NRecord();
        var log = new NLog();

        const fulfilmentUserEvent = FulfilmentUserEventModule({
            "N/record": record,
            "N/log": log,
            "N/https": https,
            "N/runtime": Runtime
        });

        var RecordEst = record.create({
            type: record.Type.ESTIMATE,
            id: "143",
            defaultValues: {
                custbody_dmc_hs_deal_id: "151088"
            },
            sublists: {
                'item': [{
                    item_display: "#4-12",
                    description: "#4 (1/2) Grade 4 Re-Bar 12",
                    rate: "1.39",
                    quantity: 1,
                    custcol_dmc_hs_line_id: '',   // '' | 'cualquier valor'                 
                    line: 1
                }]
            }
        });

        //Execute the afterSubmit method, passing in our context
        fulfilmentUserEvent.afterSubmit({
            type: 'create',
            UserEventType: {
                CREATE: 'create',
                EDIT: 'edit'
            },
            newRecord: RecordEst
        });

        describe("RECORD TYPE ESTIMATE", () => {
            it("response code 200 OK Create Estimate in Hubspot (record type Estimate)", () => {                
                expect(RecordEst.getValue('code')).equal(200)
            });

            it("hubspot product id is not empty",() =>{
                expect(RecordEst.getValue('hs_id')).not.be.equal('@')
            });

            it("hubspot line item id is not empty", () => {
                expect(RecordEst.getValue('hs_line_id')).not.be.equal('@')
            });
        })
    })
})