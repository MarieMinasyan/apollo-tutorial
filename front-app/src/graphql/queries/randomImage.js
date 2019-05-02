import gql from 'graphql-tag';

export const RANDOM_NASA_IMAGE = gql`
  query RANDOM_NASA_IMAGE($search: String!) {
    randomImage(search: $search) {
      title
      url
      description
    }
  }
`;
