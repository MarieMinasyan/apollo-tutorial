const { RESTDataSource } = require('apollo-datasource-rest');

class ImageLibraryRESTDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://images-api.nasa.gov/';
  }

  search(searchString) {
    return this.get(`search?q=${searchString}`);
  }
}

module.exports = ImageLibraryRESTDataSource;
