module.exports = {
    requester: () => {
        this.Post = (options) => {
            if (options.data) {
                switch (options.url) {
                    case 'https://api.hubapi.com/deals/v1/deal?hapikey=3168fe8e-1f2e-4248-ad13-51328c987044':
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

                    case 'https://api.hubapi.com/crm-objects/v1/objects/products?hapikey=3168fe8e-1f2e-4248-ad13-51328c987044':
                        return {
                            "code": 200,
                            "objectType": "PRODUCT",
                            "portalId": 62515,
                            "objectId": 1642767,
                            "properties": {
                                "hs_lastmodifieddate": {
                                    "versions": [
                                        {
                                            "name": "hs_lastmodifieddate",
                                            "value": "0",
                                            "timestamp": 0,
                                            "source": "CALCULATED",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "0",
                                    "timestamp": 0,
                                    "source": "CALCULATED",
                                    "sourceId": null
                                },
                                "price": {
                                    "versions": [
                                        {
                                            "name": "price",
                                            "value": "27.50",
                                            "timestamp": 1525287096980,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "27.50",
                                    "timestamp": 1525287096980,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "name": {
                                    "versions": [
                                        {
                                            "name": "name",
                                            "value": "A new product",
                                            "timestamp": 1525287096980,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "A new product",
                                    "timestamp": 1525287096980,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "createdate": {
                                    "versions": [
                                        {
                                            "name": "createdate",
                                            "value": "0",
                                            "timestamp": 0,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "0",
                                    "timestamp": 0,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "description": {
                                    "versions": [
                                        {
                                            "name": "description",
                                            "value": "A description of this product.",
                                            "timestamp": 1525287096980,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "A description of this product.",
                                    "timestamp": 1525287096980,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "recurringbillingfrequency": {
                                    "versions": [
                                        {
                                            "name": "recurringbillingfrequency",
                                            "value": "quarterly",
                                            "timestamp": 1525287096980,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "quarterly",
                                    "timestamp": 1525287096980,
                                    "source": "API",
                                    "sourceId": null
                                }
                            },
                            "version": 0,
                            "isDeleted": false
                        };

                    case 'https://api.hubapi.com/crm-objects/v1/objects/line_items?hapikey=3168fe8e-1f2e-4248-ad13-51328c987044':
                        return {
                            "code": 200,
                            "objectType": "LINE_ITEM",
                            "portalId": 62515,
                            "objectId": 9867220,
                            "properties": {
                                "amount": {
                                    "versions": [
                                        {
                                            "name": "amount",
                                            "value": "475.00",
                                            "timestamp": 0,
                                            "sourceId": "LineItemAmountCalculator",
                                            "source": "CALCULATED",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "475.00",
                                    "timestamp": 0,
                                    "source": "CALCULATED",
                                    "sourceId": "LineItemAmountCalculator"
                                },
                                "quantity": {
                                    "versions": [
                                        {
                                            "name": "quantity",
                                            "value": "50",
                                            "timestamp": 1525368534412,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "50",
                                    "timestamp": 1525368534412,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "hs_lastmodifieddate": {
                                    "versions": [
                                        {
                                            "name": "hs_lastmodifieddate",
                                            "value": "0",
                                            "timestamp": 0,
                                            "source": "CALCULATED",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "0",
                                    "timestamp": 0,
                                    "source": "CALCULATED",
                                    "sourceId": null
                                },
                                "price": {
                                    "versions": [
                                        {
                                            "name": "price",
                                            "value": "9.50",
                                            "timestamp": 1525368534412,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "9.50",
                                    "timestamp": 1525368534412,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "name": {
                                    "versions": [
                                        {
                                            "name": "name",
                                            "value": "A custom name for the product for this line item. Discounting 5% on bulk purchase.",
                                            "timestamp": 1525368534412,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "A custom name for the product for this line item. Discounting 5% on bulk purchase.",
                                    "timestamp": 1525368534412,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "createdate": {
                                    "versions": [
                                        {
                                            "name": "createdate",
                                            "value": "0",
                                            "timestamp": 0,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "0",
                                    "timestamp": 0,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "description": {
                                    "versions": [
                                        {
                                            "name": "description",
                                            "value": "This product has an updated description and price.",
                                            "timestamp": 1525287810508,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "This product has an updated description and price.",
                                    "timestamp": 1525287810508,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "hs_product_id": {
                                    "versions": [
                                        {
                                            "name": "hs_product_id",
                                            "value": "1642736",
                                            "timestamp": 1525368534412,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "1642736",
                                    "timestamp": 1525368534412,
                                    "source": "API",
                                    "sourceId": null
                                }
                            },
                            "version": 0,
                            "isDeleted": false
                        };

                    default:
                        return { code: 404, dealId: '@' }
                };
            }
            else {
                return { code: 400 }
            }
        };

        this.Put = (options) => {
            if (options.data) {
                switch (options.url) {
                    case 'https://api.hubapi.com/crm-objects/v1/objects/line_items/' + options.id + '?hapikey=3168fe8e-1f2e-4248-ad13-51328c987044':
                        return {
                            "code": 200,
                            "objectType": "LINE_ITEM",
                            "portalId": 62515,
                            "objectId": options.id,
                            "properties": {
                                "amount": {
                                    "versions": [
                                        {
                                            "name": "amount",
                                            "value": "137.50",
                                            "timestamp": 0,
                                            "sourceId": "LineItemAmountCalculator",
                                            "source": "CALCULATED",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "137.50",
                                    "timestamp": 0,
                                    "source": "CALCULATED",
                                    "sourceId": "LineItemAmountCalculator"
                                },
                                "quantity": {
                                    "versions": [
                                        {
                                            "name": "quantity",
                                            "value": "5",
                                            "timestamp": 1525371765869,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "5",
                                    "timestamp": 1525371765869,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "hs_lastmodifieddate": {
                                    "versions": [
                                        {
                                            "name": "hs_lastmodifieddate",
                                            "value": "0",
                                            "timestamp": 0,
                                            "source": "CALCULATED",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "0",
                                    "timestamp": 0,
                                    "source": "CALCULATED",
                                    "sourceId": null
                                },
                                "price": {
                                    "versions": [
                                        {
                                            "name": "price",
                                            "value": "27.50",
                                            "timestamp": 1525359863627,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "27.50",
                                    "timestamp": 1525359863627,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "description": {
                                    "versions": [
                                        {
                                            "name": "description",
                                            "value": "An updated description for this line item. Updating the quantity.",
                                            "timestamp": 1525371765869,
                                            "source": "API",
                                            "sourceVid": []
                                        },
                                        {
                                            "name": "description",
                                            "value": "A description of this product.",
                                            "timestamp": 1525359863627,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "An updated description for this line item. Updating the quantity.",
                                    "timestamp": 1525371765869,
                                    "source": "API",
                                    "sourceId": null
                                },
                                "hs_product_id": {
                                    "versions": [
                                        {
                                            "name": "hs_product_id",
                                            "value": "1688960",
                                            "timestamp": 1525371444427,
                                            "source": "API",
                                            "sourceVid": []
                                        }
                                    ],
                                    "value": "1688960",
                                    "timestamp": 1525371444427,
                                    "source": "API",
                                    "sourceId": null
                                }
                            },
                            "version": 0,
                            "isDeleted": false
                        };

                    case 'https://api.hubapi.com/crm-associations/v1/associations?hapikey=3168fe8e-1f2e-4248-ad13-51328c987044':
                        return {
                            "code": 204
                        };

                    default:
                        return { code: 404};
                };
            }
            else {
                return { code: 400 }
            };
        };

        return this;
    }
}