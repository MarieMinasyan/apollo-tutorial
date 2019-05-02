import React from 'react';
import { Query } from 'react-apollo';

import { HOME } from './graphql/queries/home';

const App = () => {
  return (
    <div>
      <Query query={HOME} variables={{ search: 'raccoon' }}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              <div className={'apod'}>
                <p>{data.apod.title}</p>
                <p>{data.apod.explanation}</p>
                <p>{data.apod.date}</p>
                <p><img src={data.apod.url} alt={data.apod.title}/></p>
              </div>
              <div className={'random'}>
                <p>{data.randomImage.title}</p>
                <p>{data.randomImage.description}</p>
                <p><img src={data.randomImage.url} alt={data.randomImage.title}/></p>
              </div>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default App;
