const { loadSuiteScriptModule, NRecord, NLog } = require('netsumo');

let Runtime = require('./Runtime');
let https = require('./https');
let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;
chai.use(chaiHttp);

var path_ue_isai = "app/ue_hs_isai.js";
const url_api_hs = 'https://api.hubapi.com/';

const FulfilmentUserEventModule = loadSuiteScriptModule(path_ue_isai)

describe("Test Records Isai NetSuite & HubSpot", () => {
    it("Get URL API HubSpot", () => {
        chai.request(url_api_hs)
            .get('')
            .end(function (err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
            });
    });

    it("Get Parameter not is null (Runtime.getCurrentScript)", () => {
        expect(Runtime.getCurrentScript().getParameter({ name: 'custscript_dmc_alk_hapikey_ue' })).to.not.be.null
    })
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

        // create opportunity record
        // var RecordOpp = record.create({
        //     type: record.Type.OPPORTUNITY,
        //     isDynamic: true,
        //     id: 18492,
        //     defaultValues: {
        //         title: 'kronosinc.com -A new kind of deal',
        //         companyid: '30924',
        //         entity: { value: '30924', text: 'Bring Us Together Inc' },
        //         entitystatus: { value: '7', text: 'Opportunity Identified' },
        //         expectedclosedate: { text: "10/22/2019" },
        //         projectedtotal: 0.00,                
        //         dealstage: 'appointmentscheduled'
        //     }
        // });

        var RecordEst = record.create({
            type: record.Type.ESTIMATE,
            id: "143",
            defaultValues: {
                custbody_dmc_hs_deal_id: "151088",
            },
            sublists: {
                'item': [{
                    item_display: "#4-12",
                    description: "#4 (1/2) Grade 4 Re-Bar 12",
                    rate: "1.39",
                    quantity: 1,
                    custcol_dmc_hs_line_id: '',                    
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

        describe("RECORD TYPE OPPORTUNITY", () => {
            it("response code 200 OK Create Opportunity in Hubspot (record type Opportunity)", () => {
                expect(RecordOpp.getValue('code')).equal(200);
            })

            it("hubspot id is not empty (record type Opportunity)" , () => {
                expect(RecordOpp.getValue('custbody_dmc_hs_deal_id')).not.be.equal('@');
            })
        });

        describe("RECORD TYPE ESTIMATE", () => {
            it("response code 200 OK Create Estimate in Hubspot (record type Estimate)", () => {                
                expect(RecordEst.getValue('code')).equal(200)
            });

            it("hubspot id is not empty (record type Estimate)",() =>{
                expect(RecordEst.getValue('hs_id')).not.be.equal('@')
            })
        })
    })
})