'use strict';

const resolvers = {
  NASAImage: {
    title: ({ data}) => data[0].title,
    description: ({ data}) => data[0].description,
    url: ({ links}) => links[0].href,
  },
  Query: {
    randomImage: (_, { search }, { dataSources: { ImageLibraryRESTDataSource } }) => ImageLibraryRESTDataSource.search(search).then(result => {
      if (result.collection.metadata.total_hits === 0) {
        return null;
      }

      return result.collection.items[Math.floor(Math.random()*result.collection.metadata.total_hits)];
    }),
  },
};

module.exports = resolvers;
