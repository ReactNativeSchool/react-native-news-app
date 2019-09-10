import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';

const restLink = new RestLink({
  uri: 'https://newsapi.org/v2/',
  headers: {
    Authorization: '918578615bfd429c820e037723699cd5',
  },
});

export const client = ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});
