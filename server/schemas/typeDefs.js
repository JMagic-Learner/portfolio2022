const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Projects{
    _id: ID
    name: String
    description: String
    link: String
    github: String
    media: String
  }


  type Query {
    projects: [Projects]
  }
`;

module.exports = typeDefs;
