import gql from 'graphql-tag';

export const APOD = gql`
  query APOD {
    apod {
      title
      url
      date
      explanation
      type
    }
  }
`;
