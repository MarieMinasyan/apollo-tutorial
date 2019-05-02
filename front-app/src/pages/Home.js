import React from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';

import { APOD } from '../graphql/queries/apod';
import { RANDOM_NASA_IMAGE } from '../graphql/queries/randomImage';

const Home = () => {
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
      <p><Link to={"/random"}>Go to random</Link></p>
    </div>
  );
};

export default Home;
