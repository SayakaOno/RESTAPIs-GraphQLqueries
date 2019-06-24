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

const filmsQuery = gql`
  query films {
    film @rest(type: "Film", path: "films") {
      id
      title
      description
    }
  }
`;

const speciesQuery = gql`
  query species {
    species @rest(type: "Species", path: "species") {
      name
    }
  }
`;

const peopleQuery = gql`
  query people {
    people @rest(type: "People", path: "people") {
      name
      species @rest(type: "Species", path: "species") {
        name
      }
      films
    }
  }
`;

export default () => {
  client.query({ query: peopleQuery }).then(response => {
    // response.data.film.forEach(film => console.log(film.title));
    response.data.people.forEach(person => console.log(person.name));
    console.log(response.data);
  });
};
