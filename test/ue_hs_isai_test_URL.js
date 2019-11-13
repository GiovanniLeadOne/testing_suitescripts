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

describe("Test URL API Hubspot and Runtime", () => {

    const fulfilmentUserEvent = FulfilmentUserEventModule({        
        "N/https": https,
        "N/runtime": Runtime
    });

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

    it("Get URL API HUBSPOT",() =>{

    })
})