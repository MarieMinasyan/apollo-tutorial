const { RESTDataSource } = require('apollo-datasource-rest');
const API_KEY = 'mzjTW0XzJfXTdfljHaXy3SOv77hMDLu6CDAuDdz9';

class NASARESTDataSource extends RESTDataSource {
  willSendRequest(request) {
    request.params.append('api_key', API_KEY);
  }
}

module.exports = NASARESTDataSource;
