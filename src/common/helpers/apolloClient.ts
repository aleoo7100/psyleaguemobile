import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'http://192.168.1.2:8080/v1/graphql', //TODO: add this to env
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-hasura-role': 'unregistered_user',
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([authMiddleware, httpLink]),
});

export default client;
