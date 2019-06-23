import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import gql from 'graphql-tag';

// setup your `RestLink` with your endpoint
const restLink = new RestLink({ uri: 'https://ghibliapi.herokuapp.com/' });

// setup your client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});

const query = gql`
  query films {
    film @rest(type: "Film", path: "films") {
      id
      title
      description
    }
  }
`;
export default () => {
  client.query({ query }).then(response => {
    response.data.film.forEach(film => console.log(film.title));
    console.log(response.data);
  });
};
