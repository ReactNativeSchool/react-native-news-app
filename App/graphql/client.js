import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

const API_KEY = '918578615bfd429c820e037723699cd5';

// setup your `RestLink` with your endpoint
const restLink = new RestLink({
  uri: 'https://newsapi.org/v2/',
  headers: {
    Authorization: API_KEY,
  },
});

// setup your client
export const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
