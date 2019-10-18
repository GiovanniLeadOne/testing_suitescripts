const sinon = require('sinon')
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
        it("Record type is Opportunity" , () => {
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
            //create a new opportunity record
            var opportunity = record.load({
            type:record.Type.OPPORTUNITY,
            id:"1269",
            defaultValues:{
                title:"Winnie Wheelchairs",
                entity:"997",
                subsidiary:"1",
                location:"2",
                salesrep:"17",
                companyid:"997"

            }
        })
        
        //Execute the beforeSubmit method, passing in our context
        fulfilmentUserEvent.afterSubmit({
            type:"create",
            UserEventType:{
            CREATE:"create",
            EDIT:"edit"
        },
            newRecord:opportunity
        });
            expect(opportunity.getValue("type")).toBe("opportunity") 
        })
    })
})