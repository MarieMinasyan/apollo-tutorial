import NASARESTDataSource from './NASARESTDataSource';

class APODRESTDataSource extends NASARESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.nasa.gov/';
  }

  getDailyImage() {
    return this.get('planetary/apod');
  }
}

module.exports = APODRESTDataSource;
