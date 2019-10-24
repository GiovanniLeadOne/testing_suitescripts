/**
 * dmc_alk_hubspot_ue.js
 * Trimble Maps
 * @NApiVersion 2.x
 * @NScriptType UserEventScript
 * @NModuleScope Public
 */

define(['N/ui/serverWidget', 'N/https', 'N/record', 'N/search', 'N/ui/dialog', 'N/runtime', 'N/log'],
	function (serverWidget, https, record, search, dialog, runtime, log) {
		
		var param_hapikey = runtime.getCurrentScript().getParameter({
			name: 'custscript_dmc_alk_hapikey_ue'
		});

		function requester(param_hapikey) {
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
			  log.debug('Get', url);
			  return https.get({
				url: url,
				headers: this.headers
			  });
			};
			this.Post = function (url, body) {
			  log.debug('Post', url);
			  return https.post({
				url: url,
				body: JSON.stringify(body),
				headers: this.headers
			  });
			};
			this.Put = function (url, body) {
			  log.debug('Put', url);
			  return https.put({
				url: url,
				body: JSON.stringify(body),
				headers: this.headers
			  });
			};
		}

		function afterSubmit(context) {
			var newrec = context.newRecord
			var reque = new requester(param_hapikey);
			if (context.type == "create") {
				if (newrec.type == "opportunity") {
					log.debug("OPP", newrec.type);

					var errMsg;

					var rec = newrec
					// var rec = record.load({
					// 	type: 'opportunity',
					// 	id: newrec.id
					// });
					
					// for (var element in context.newRecord) {
					// 	console.log(element + " <----- AQUI ES")	
					// }			
					
					//console.log(context.newRecord.getText('entitystatus') + " <----- ENTITY STATUS")
					
					var title = rec.getText('title');					

					var projectedtotal = rec.getValue('projectedtotal');

					var company_id = rec.getValue('companyid');

					var id = rec.getValue('id');

					var dealstage = rec.getText('entitystatus');

					//Deal Stage value on hubsot is a string like: closewon
					dealstage = String(dealstage);

					dealstage = dealstage.replace(/\s/g, "").toLowerCase();
					
					if(dealstage == "opportunityidentified"){
						dealstage = "778371"
					}

					var closedate = rec.getText('expectedclosedate');

					// Get timestamp value from closedate 
					closedate = new Date(String(closedate)).valueOf();

					log.debug("Record Vars", "title: " + title + " projt: " + projectedtotal + " deals: " + dealstage + " closed: " + closedate);
					
					//REVIEW Load customer from opportunity record by companyid property, maybe it will be better use a custom_search (optimizable) 
					var customer_rec = newrec
					// var customer_rec = record.load({
					// 	type: "customer",
					// 	id: company_id
					// });

					hs_cus_id = customer_rec.getValue("custentity_hubspot_id_");

					var opp_record = {
						"associations": {
							"associatedCompanyIds": [
								hs_cus_id
							],
							"associatedVids": []
						},
						"properties": [{
								"value": title,
								"name": "dealname"
							},
							{
								"value": dealstage,
								"name": "dealstage"
							},
							{
								"value": "default",
								"name": "pipeline"
							},
							{
								"value": 38164644,
								"name": "hubspot_owner_id"
							},
							{
								"value": closedate,
								"name": "closedate"
							},
							{
								"value": projectedtotal,
								"name": "amount"
							},
							{
								"value": id,
								"name": "opportunity_id"
							},
							{
								"value": "newbusiness",
								"name": "dealtype"
							}
						]
					};

					var response_hubspot = reque.Post(reque.deals.ADD + reque.auth, opp_record);
					var obj = JSON.parse(response_hubspot.body);

					log.debug("deal_body",opp_record);
					log.debug("RESP",response_hubspot);

					custentity_dmc_hubspot_id = ""
					if (response_hubspot.code == 200) {
						errMsg = 'Record Created';
						custentity_dmc_hubspot_id = obj.dealId;
					} else if (response_hubspot.code == 409) {
						errMsg = 'Opp already exists';
						custentity_dmc_hubspot_id = obj.identityProfile.vid;
					} else {
						errMsg = 'Bad request';
					}
					custentity_dmc_hubspot_id = String(custentity_dmc_hubspot_id);

					log.debug("custentity_dmc_hubspot_id",custentity_dmc_hubspot_id);

					dialog.alert({
						title: response_hubspot.code,
						message: errMsg
					});

					log.debug("https response_hubspot", response_hubspot)
					//lo modifique el set value es diferente en netsumo
					rec.setValue({fieldId: 'custbody_dmc_hs_deal_id', value: custentity_dmc_hubspot_id});

					try {
						var recordId = rec.save();
						log.debug("Updated", "Record Type:Opp, ID:");
					} catch (e) {
						log.debug("Error", e);
						log.debug("Error", "Error updating record with id:");
					}

				} else if (newrec.type == "estimate" || newrec.type == "salesorder") {
					log.debug("ESTIMATE", newrec.type);

					  rec = record.load({
						type: newrec.type,
						id: newrec.id
					  });
			  
					var dealId = rec.getValue({
					  fieldId: "custbody_dmc_hs_deal_id"
					});
					
					//REVIEW Testing issues 
					var objSublist = rec.getSublist({
					  sublistId: 'item'
					});
			  
					var numItems = rec.getLineCount({
					  sublistId: 'item'
					});
			  
					log.debug("Num items", numItems);
			  
					var i;
			  
					//NOTE CREATE PRODUCTS
					for (i = 0; i < numItems; i++) {
					  try {
						var nameitem = rec.getSublistText({
						  sublistId: 'item',
						  fieldId: 'item_display',
						  line: i
						});
			  
						var description = rec.getSublistText({
						  sublistId: 'item',
						  fieldId: 'description',
						  line: i
						});
			  
						var price = rec.getSublistText({
						  sublistId: 'item',
						  fieldId: 'rate',
						  line: i
						});
			  
						var quantity = rec.getSublistText({
						  sublistId: 'item',
						  fieldId: 'quantity',
						  line: i
						});

						var hs_line_id = rec.getSublistText({
							sublistId: 'item',
							fieldId: 'custcol_dmc_hs_line_id',
							line: i
						  });
					
						log.debug("hs_line_id",hs_line_id);
						log.debug("quantity",quantity);

						//NOTE If there is no HS product Id, it will be created through the API
						if(hs_line_id == "" || hs_line_id == undefined)
						{
							log.debug("Create new product", hs_line_id);

							var product = [{
								"name": "name",
								"value": nameitem
							  },
							  {
								"name": "description",
								"value": description
							  },
							  {
								"name": "price",
								"value": price
							  }
							]
				  
							log.debug("Product", product);
				  
							var response_prod = reque.Post(reque.products.ADD + reque.auth, product);
				  
							log.debug("resp product", response_prod);
				  
							log.debug("resp product body", response_prod.body);
				  
							var obj_product = JSON.parse(response_prod.body);
				  
							log.debug("Obj product", obj_product);
				  
							var _hs_product_id = obj_product.objectId
							var _price = obj_product.properties.price.value
							var _name = obj_product.properties.name.value
				  
							log.debug("Object id _hs_product_id", _hs_product_id);
							//FIXME set hs_product_id value in custitem_dmc_hs_product_id field
							
							//NOTE CREATE A LINE ITEM 
							var line_item = [{
								"name": "hs_product_id",
								"value": _hs_product_id
							  },
							  {
								"name": "quantity",
								"value": quantity
							  },
							  {
								"name": "price",
								"value": _price
							  },
							  {
								"name": "name",
								"value": _name
							  }
							];
				  
							var response_line_item = reque.Post(reque.items.ADD + reque.auth, line_item);
				  
							log.debug("line item", line_item);
				  
							log.debug("response line item", response_line_item.body);
				  
							var obj_line_item = JSON.parse(response_line_item.body);
				  
							log.debug("obj line item", obj_line_item);
							
							hs_line_id = obj_line_item.objectId;

							rec.setSublistText({
								sublistId: 'item',
								fieldId: 'custcol_dmc_hs_line_id',
								line: i,
								text: hs_line_id
							});

							var hs_line_id = rec.getSublistText({
								sublistId: 'item',
								fieldId: 'custcol_dmc_hs_line_id',
								line: i
							  });

							rec.save();

							log.debug("Line Item New Product", hs_line_id)

						}else{
							log.debug("Update product", hs_line_id);
							//NOTE Updating item quantity, price and name.
							var line_item = [
								{
								  "name": "quantity",
								  "value": quantity
								}
							]							  
							//NOTE PUT /crm-objects/v1/objects/products/:id similar to items.ADD
							var response_line_item = reque.Put(reque.items.ADD +"/"+hs_line_id+reque.auth, line_item);
				  
							log.debug("line item", line_item);
				  
							log.debug("response line item", response_line_item.body);
				  
							var obj_line_item = JSON.parse(response_line_item.body);
				  
							log.debug("obj line item", obj_line_item);
						
						}
			  
						//ASSOCIATE CRM OBJECTS
						var associate_object = {
						  "fromObjectId": dealId,
						  "toObjectId": hs_line_id,
						  "category": "HUBSPOT_DEFINED",
						  "definitionId": 19
						}
			  
						var response_associate_crm = reque.Put(reque.associations.CREATE + reque.auth, associate_object);
			  
						log.debug("response_associate_crm", response_associate_crm);
			  
						//REVIEW updateDealstage();
			  
					  } catch (e) {
						log.debug("Error sendItems", e.message);
					  }
					}  
				}
			}
			return true
		}

		return {
			afterSubmit: afterSubmit
		};
	}
);