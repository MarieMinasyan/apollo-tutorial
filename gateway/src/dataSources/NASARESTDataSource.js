const { RESTDataSource } = require('apollo-datasource-rest');
const API_KEY = 'DEMO_KEY';

class NASARESTDataSource extends RESTDataSource {
  willSendRequest(request) {
    request.params.append('api_key', API_KEY);
  }
}

module.exports = NASARESTDataSource;
