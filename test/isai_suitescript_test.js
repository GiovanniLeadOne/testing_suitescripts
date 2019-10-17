const sinon = require('sinon')
const {loadSuiteScriptModule, NRecord, NLog} = require('netsumo');

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
            const fulfilmentUserEvent = FulfilmentUserEventModule({
                "N/record":record,
                "N/log":log                
            });
            //create a new opportunity record
            var opportunity = record.create({
            type:record.Type.OPPORTUNITY,
            id:"1269",
            defaultValues:{
                title:"new product line"
            }
            /*sublists:{
                'package':[{
                  packageweight:10,
                  sys_id:1232342342434,
                  sys_parentid:89842893742837,
                  pkgWeightUnit:"lbs",
                  packagedescr:"some description",
                  shippingaddress: record.create({ // create a sublist subrecord (or use an existing Record reference)
                    type: record.Type.Address,
                    id: 1235,
                    defaultValues:{
                      addr1: 'Main street'
                    }
                  })
                }]                
              }*/ 
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
           should(opportunity.getValue("type")).toBe("opportunity") 
        })
    })
})