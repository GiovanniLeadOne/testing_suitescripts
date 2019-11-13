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
        var RecordOpp = record.create({
            type: record.Type.OPPORTUNITY,
            isDynamic: true,
            id: 18492,
            defaultValues: {
                title: 'kronosinc.com -A new kind of deal',
                companyid: '30924',
                entity: { value: '30924', text: 'Bring Us Together Inc' },
                entitystatus: { value: '7', text: 'Opportunity Identified' },
                expectedclosedate: { text: "10/22/2019" },
                projectedtotal: 0.00,                
                dealstage: 'appointmentscheduled'
            }
        });

        //Execute the afterSubmit method, passing in our context
        fulfilmentUserEvent.afterSubmit({
            type: 'create',
            UserEventType: {
                CREATE: 'create',
                EDIT: 'edit'
            },
            newRecord: RecordOpp
        });

        describe("RECORD TYPE OPPORTUNITY", () => {
            it("response code 200 OK Create Opportunity in Hubspot (record type Opportunity)", () => {
                expect(RecordOpp.getValue('code')).equal(200);
            })

            it("hubspot id is not empty (record type Opportunity)" , () => {
                expect(RecordOpp.getValue('custbody_dmc_hs_deal_id')).not.be.equal('@');
            })
        });
    })
})