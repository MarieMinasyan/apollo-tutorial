import { createPersistedQueryLink } from 'apollo-link-persisted-queries';

const persistedQueryLink = createPersistedQueryLink({
  useGETForHashedQueries: true,
});

export default persistedQueryLink;
