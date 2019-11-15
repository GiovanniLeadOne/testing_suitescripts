const { loadSuiteScriptModule, NRecord, NLog } = require('netsumo');

let Runtime = require('./Runtime');
let https = require('./https');
const expect = require('chai').expect;

var path_ue_isai = "app/ue_hs_isai.js";


const FulfilmentUserEventModule = loadSuiteScriptModule(path_ue_isai)

describe("Test URL API Hubspot and Runtime", () => {

    const fulfilmentUserEvent = FulfilmentUserEventModule({        
        "N/https": https,
        "N/runtime": Runtime
    });

    it("Get URL API HubSpot", () => {
        expect(https.url).equal('https://api.hubapi.com/')
    });

    it("Get Parameter not is null (Runtime.getCurrentScript)", () => {
        expect(Runtime.getCurrentScript().getParameter({ name: 'custscript_dmc_alk_hapikey_ue' })).to.not.be.null
    })
})