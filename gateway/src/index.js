import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
const { RedisCache } = require('apollo-server-cache-redis');

const GraphQLHelper = require('./helpers/graphql');

const PORT = 3000;
const app = express();

const redisCache = new RedisCache({
  host: 'redis',
  password: 'password',
});

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs: GraphQLHelper.typeDefs,
    resolvers: GraphQLHelper.resolvers,
  }),
  dataSources: () => GraphQLHelper.dataSources,
  cache: redisCache,
  persistedQueries: {
    cache: redisCache,
  },
});

server.applyMiddleware({ app });

app.listen({ port: PORT, expressApp: app }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);

app.get('/', (req, res) => res.send('Hello World!'));
