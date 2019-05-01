'use strict';

const resolvers = {
  APOD: {
    type: ({ media_type }) => media_type,
  },
  Query: {
    apod: (_, __, { dataSources: { APODRESTDataSource } }) => APODRESTDataSource.getDailyImage(),
  },
};

module.exports = resolvers;
