var config;

config = {
  "SGVerifyDomain": "localhost",
  "SGVerifyPort": 3004,

  "PartnerDomain": "localhost",
  "PartnerPort": 3001,
  "PartnerClientPort": 3002,

  "personSampleRequest": {
    "domain": "sandbox.api.myinfo.gov.sg",
    "requestPath": "/com/v3/person-sample-usage/dpp",
    "headers": {
      "content-type": "application/json"
    },
    "method": "GET"
  },
  "mockPassSampleRequest": {
    "domain": "mockpass.dev.apim.myinfo.gov.sg",
    "requestPath": "/mock-id-token/",
    "headers": {},
    "method": "GET"
  }
};
module.exports = config;
