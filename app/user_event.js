/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */
define(['N/log'], function(log) {

    function beforeLoad(context) {
        if (context.type != context.UserEventType.CREATE)
        return;
        var customerRecord = context.newRecord;
        customerRecord.setValue('phone', '555-555-5555');
        if (!customerRecord.getValue('salesrep'))
            customerRecord.setValue('salesrep', 46); // replace '46'  with one specific to your account
            
    }

    return {
        beforeLoad: beforeLoad        
    }
});
