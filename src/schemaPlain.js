export default `
  type Film {
    id: ID!
    title: String!
    description: String!
    director: String!
    producer: String!
    release_date: String!
    rt_score: String!
    people: String!
    species: String!
    locations: String!
    vehicles: String!
    url: String!
  }

  type Species {
    id: ID!
    name: String!
    classification: String!
    eye_colors: String!
    hair_colors: String!
    people: String!
    films: String!
    url: String!
  }
`;
