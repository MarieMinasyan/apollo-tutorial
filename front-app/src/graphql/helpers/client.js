import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

import errorLink from './errorLink';
import httpLink from './httpLink';
import persistedQueryLink from './persistedQueryLink';

const createGraphQLClient = () => {
  return new ApolloClient({
    link: ApolloLink.from([persistedQueryLink, errorLink, httpLink]),
    cache: new InMemoryCache(),
  });
};

export default createGraphQLClient;
