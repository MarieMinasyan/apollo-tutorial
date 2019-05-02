import React from 'react';
import { Query } from 'react-apollo';

import { APOD } from './graphql/queries/apod';
import { RANDOM_NASA_IMAGE } from './graphql/queries/randomImage';

const App = () => {
  return (
    <div>
      <Query query={APOD}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div className={'apod'}>
              <p>{data.apod.title}</p>
              <p>{data.apod.explanation}</p>
              <p>{data.apod.date}</p>
              <p><img src={data.apod.url} alt={data.apod.title}/></p>
            </div>
          );
        }}
      </Query>
      <Query query={RANDOM_NASA_IMAGE} variables={{ search: 'raccoon' }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div className={'random'}>
              <p>{data.randomImage.title}</p>
              <p>{data.randomImage.description}</p>
              <p><img src={data.randomImage.url} alt={data.randomImage.title}/></p>
            </div>
        );
        }}
      </Query>
    </div>
  );
};

export default App;
