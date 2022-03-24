const { AuthenticationError } = require('apollo-server-express');
const { Projects } = require('../models');


const resolvers = {
  Query: {
    projects: async () => {
      return Projects.find().sort({"_id":-1});
    },
  },
};

module.exports = resolvers;


