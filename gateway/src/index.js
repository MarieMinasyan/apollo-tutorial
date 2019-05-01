import express from 'express';
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';

const PORT = 3000;
const app = express();

const GraphQLHelper = require('./helpers/graphql');

const server = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs: GraphQLHelper.typeDefs,
    resolvers: GraphQLHelper.resolvers,
  }),
  dataSources: () => GraphQLHelper.dataSources,
});

server.applyMiddleware({ app });

app.listen({ port: PORT, expressApp: app }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);

app.get('/', (req, res) => res.send('Hello World!'));
