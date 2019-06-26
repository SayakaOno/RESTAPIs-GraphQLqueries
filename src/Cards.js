import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const uri = 'https://ghibliapi.herokuapp.com/';

const getSpeciesPath = data => {
  let path = data.exportVariables.url;
  path = typeof path === 'object' ? path[0] : path;
  return path.replace(uri, '');
};

const peopleQuery = gql`
  query people($pathBuilder: any) {
    people @rest(type: "People", path: "people") {
      name @export(as: "name")
      species @export(as: "url")
      species2 @rest(pathBuilder: $pathBuilder, type: "Species2") {
        classification
        name
      }
      films @export(as: "url")
      film @rest(pathBuilder: $pathBuilder, type: "Film") {
        title @export(as: "title")
        release_date
      }
      # image @rest(path: "q=dog", type: "Image", endpoint: "google") {
      #   items(first: 1)
      # }
    }
  }
`;

const Cards = props => {
  console.log(props);
  return (
    <div className="ui link cards">
      {props.loading
        ? null
        : props.people.map(person => {
            return (
              <Card
                key={person.name}
                name={person.name}
                type={person.species2.name}
                classification={person.species2.classification}
                film={person.film.title}
                date={person.film.release_date}
              />
            );
          })}
    </div>
  );
};

const Card = props => {
  return (
    <div className="card">
      <div className="image">
        {/* <img src="/images/avatar2/large/matthew.png" /> */}
      </div>
      <div className="content">
        <div className="header">{props.name}</div>
        <div className="meta">
          <span>
            {props.type}/{props.classification}
          </span>
        </div>
      </div>
      <div className="extra content">
        <span className="right floated">{props.date}</span>
        <span>{props.film}</span>
      </div>
    </div>
  );
};

const ShowsResultQuery = graphql(peopleQuery, {
  props: ({ data }) => {
    if (data.loading) {
      return {
        loading: data.loading
      };
    }

    if (data.error) {
      return {
        error: data.error
      };
    }
    return {
      people: data.people,
      loading: false
    };
  },
  options: { variables: { pathBuilder: getSpeciesPath } }
})(Cards);

const CardsContainer = () => {
  return <ShowsResultQuery />;
};

export default CardsContainer;
