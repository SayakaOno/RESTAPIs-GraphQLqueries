import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import gql from 'graphql-tag';

// setup your `RestLink` with your endpoint
const restLink = new RestLink({
  uri: 'https://ghibliapi.herokuapp.com/'
});

// setup your client
const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache()
});

const filmsQuery = gql`
  query films($pathBuilder: any) {
    film @rest(type: "Film", path: "films") {
      id @export(as: "url")
      film @rest(pathBuilder: $pathBuilder, type: "Film") {
        title
        description
      }
      title
      description
    }
  }
`;

const getSpeciesPath = data => {
  let path = data.exportVariables.url;
  path = typeof path === 'object' ? path[0] : path;
  return path.replace('https://ghibliapi.herokuapp.com/', '');
};

const peopleQuery = gql`
  query people($pathBuilder: any) {
    people @rest(type: "People", path: "people") {
      name
      species @export(as: "url")
      species2 @rest(pathBuilder: $pathBuilder, type: "Species2") {
        classification
        name
      }
      films @export(as: "url")
      film @rest(pathBuilder: $pathBuilder, type: "Film") {
        title
        release_date
      }
    }
  }
`;

export default () => {
  client
    .query({ query: peopleQuery, variables: { pathBuilder: getSpeciesPath } })
    .then(response => {
      console.log(response.data);
    });
};
