import gql from 'graphql-tag';

const FILM_FRAGMENT = gql`
  fragment filmFragment on Film {
    id
    title
    description
    director
    producer
    release_date
    rt_score
    people
    locations
    vehicles
    url
  }
`;

const SPIECES_FRAGMENT = gql`
  fragment spiecesFragment on Spieces {
    id
    name
    classification
    eye_colors
    hair_colors
    people
    films
    url
  }
`;

export const FILMS = gql`
  query films {
    films {
      ...filmFragment
      spieces {
        ...spiecesFragment
      }
    }
  }
  ${FILM_FRAGMENT}
  ${SPIECES_FRAGMENT}
`;

export const SPIECES = gql`
  query spieces {
    spieces {
      ...spiecesFragment
    }
  }
  ${SPIECES_FRAGMENT}
`;
