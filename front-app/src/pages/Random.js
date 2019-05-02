import React from 'react';
import { Query } from 'react-apollo';

import { RANDOM_NASA_IMAGE } from '../graphql/queries/randomImage';
import { Link } from 'react-router-dom';

const Random = () => {
  return (
    <div>
      <Query query={RANDOM_NASA_IMAGE} variables={{ search: 'raccoon' }} fetchPolicy={"network-only"}>
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
      <p><Link to={"/"}>Back to home</Link></p>
    </div>
  );
};

export default Random;
