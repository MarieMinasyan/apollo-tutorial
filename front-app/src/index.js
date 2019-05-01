import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';

import './index.css';
import App from './App';
import createClientGraphQL from './graphql/helpers/client';

ReactDOM.render((
  <ApolloProvider client={createClientGraphQL()}>
    <App />
  </ApolloProvider>
), document.getElementById('root'));
