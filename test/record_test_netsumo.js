const {loadSuiteScriptModule, NRecord} = require('netsumo');

var path_record = "app/record.js";
const FulfilmentUserEventModule = loadSuiteScriptModule(path_record)

describe("Netsuite Test Records" , () => {
    it("Hello World!", () => {
        var record = new NRecord();
        //Instantiate our module, passing in our dependencies
        const fulfilmentUserEvent = FulfilmentUserEventModule({
        "N/record":record
        })
        var itemFulfilmentRecord = record.create({
            type:record.Type.ITEM_FULFILLMENT,
            id:1234,
            defaultValues:{
              shipmethod:{
                value:1,
                text:"DPD"
              }
            }
            })        
          //Execute the beforeSubmit method, passing in our context
        fulfilmentUserEvent.beforeSubmit({
            type:"create",
            UserEventType:{
            CREATE:"create",
            EDIT:"edit"
            },
            newRecord:itemFulfilmentRecord
        })

        should(itemFulfilmentRecord.getValue("custbody_a_custom_field")).be.equal("Hello World!")
    })
})