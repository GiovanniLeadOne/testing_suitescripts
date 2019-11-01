module.exports = {
    requester:(param_hapikey) => {
        this.url = "https://api.hubapi.com/";
        this.auth = '?hapikey='+param_hapikey;
        this.contacts = {
        ALL: this.url + "contacts/v1/lists/all/contacts/recent",
        INDIVIDUAL: this.url + "contacts/v1/contact/vids/batch",
        UPDATE: this.url + "contacts/v1/contact/vid/",
        ADD: this.url + "contacts/v1/contact"
        };
        this.companies = {
        ADD: this.url + "companies/v2/companies"
        };
        this.deals = {
        ALL: this.url + "deals/v1/deal/paged",
        UPDATE: this.url + "deals/v1/deal/",
        ADD: this.url + "deals/v1/deal"
        };
        this.products = {
        ADD: this.url + "crm-objects/v1/objects/products"
        };
        this.items = {
        ADD: this.url + "crm-objects/v1/objects/line_items"
        };
        this.associations = {
        CREATE: this.url + "crm-associations/v1/associations"
        };
        this.headers = {
        "Content-Type": 'application/json',
        "dataType": 'json',
        "Access-Control-Allow-Credentials": "true",
        'Accept': "application/json"
        };        

        this.Post = (options) => {
            switch(options.url){
                case 'https://979e5f6a-4f8f-49f6-b466-a6abe040b53e.mock.pstmn.io/api_hubspot/?hapikey=3168fe8e-1f2e-4248-ad13-51328c987044':
                return {
                    "code": 200,
                    "portalId": 62515,
                    "dealId": 151088,
                    "isDeleted": false,
                    "associations": {
                        "associatedVids": [
                            27136
                        ],
                        "associatedCompanyIds": [
                            8954037
                        ],
                        "associatedDealIds": []
                    },
                    "properties": {
                        "amount": {
                            "value": "60000",
                            "timestamp": 1410381338943,
                            "source": "API",
                            "sourceId": null,
                            "versions": [
                                {
                                    "name": "amount",
                                    "value": "60000",
                                    "timestamp": 1410381338943,
                                    "source": "API",
                                    "sourceVid": []
                                }
                            ]
                        },
                        "dealstage": {
                            "value": "appointmentscheduled",
                            "timestamp": 1410381338943,
                            "source": "API",
                            "sourceId": null,
                            "versions": [
                                {
                                    "name": "dealstage",
                                    "value": "appointmentscheduled",
                                    "timestamp": 1410381338943,
                                    "source": "API",
                                    "sourceVid": []
                                }
                            ]
                        },
                        "pipeline": {
                            "value": "default",
                            "timestamp": 1410381338943,
                            "source": "API",
                            "sourceId": null,
                            "versions": [
                                {
                                    "name": "pipeline",
                                    "value": "default",
                                    "timestamp": 1410381338943,
                                    "source": "API",
                                    "sourceVid": []
                                }
                            ]
                        },
                        "closedate": {
                            "value": "1409443200000",
                            "timestamp": 1410381338943,
                            "source": "API",
                            "sourceId": null,
                            "versions": [
                                {
                                    "name": "closedate",
                                    "value": "1409443200000",
                                    "timestamp": 1410381338943,
                                    "source": "API",
                                    "sourceVid": []
                                }
                            ]
                        },
                        "createdate": {
                            "value": "1410381339020",
                            "timestamp": 1410381339020,
                            "source": null,
                            "sourceId": null,
                            "versions": [
                                {
                                    "name": "createdate",
                                    "value": "1410381339020",
                                    "timestamp": 1410381339020,
                                    "sourceVid": []
                                }
                            ]
                        },
                        "hubspot_owner_id": {
                            "value": "24",
                            "timestamp": 1410381338943,
                            "source": "API",
                            "sourceId": null,
                            "versions": [
                                {
                                    "name": "hubspot_owner_id",
                                    "value": "24",
                                    "timestamp": 1410381338943,
                                    "source": "API",
                                    "sourceVid": []
                                }
                            ]
                        },
                        "hs_createdate": {
                            "value": "1410381339020",
                            "timestamp": 1410381339020,
                            "source": null,
                            "sourceId": null,
                            "versions": [
                                {
                                    "name": "hs_createdate",
                                    "value": "1410381339020",
                                    "timestamp": 1410381339020,
                                    "sourceVid": []
                                }
                            ]
                        },
                        "dealtype": {
                            "value": "newbusiness",
                            "timestamp": 1410381338943,
                            "source": "API",
                            "sourceId": null,
                            "versions": [
                                {
                                    "name": "dealtype",
                                    "value": "newbusiness",
                                    "timestamp": 1410381338943,
                                    "source": "API",
                                    "sourceVid": []
                                }
                            ]
                        },
                        "dealname": {
                            "value": "A new Deal",
                            "timestamp": 1410381338943,
                            "source": "API",
                            "sourceId": null,
                            "versions": [
                                {
                                    "name": "dealname",
                                    "value": "A new Deal",
                                    "timestamp": 1410381338943,
                                    "source": "API",
                                    "sourceVid": []
                                }
                            ]
                        }
                    }
                };
            };
        };

        return this;
    }    
}