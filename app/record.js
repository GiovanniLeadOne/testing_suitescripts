/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */
define(['N/record'], function(record) {

    function beforeSubmit(context) {
        if(context.type == context.UserEventType.CREATE) {
          var fulfilmentRecord = context.newRecord;
  
          fulfilmentRecord.setValue({
            fieldId:"custbody_a_custom_field",
            value:"Hello World!"
          })
        }
    }
  
    return {
        beforeSubmit: beforeSubmit
    };
  
  });