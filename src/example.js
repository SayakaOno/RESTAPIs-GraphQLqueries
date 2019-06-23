import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import gql from 'graphql-tag';

// setup your `RestLink` with your endpoint
const restLink = new RestLink({ uri: 'https://swapi.co/api/' });

// setup your client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});

const query = gql`
  query luke {
    person @rest(type: "Person", path: "people/1/") {
      name
    }
  }
`;

export default () => {
  client.query({ query }).then(response => {
    console.log(response.data.person.name);
  });
};
