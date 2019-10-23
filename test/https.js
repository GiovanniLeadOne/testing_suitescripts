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

        this.Get = function (url) {        
        return ({
            url: url,
            headers: this.headers
        });
        };
        this.Post = function (url, body) {
        return ({
            url: url,
            body: JSON.stringify(body),
            headers: this.headers
        });
        };
        this.Put = function (url, body) {
        return ({
            url: url,
            body: JSON.stringify(body),
            headers: this.headers
        });
        };

        return this;
    }    
}