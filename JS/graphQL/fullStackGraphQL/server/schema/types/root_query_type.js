/**
*
*
* @summary: Handle logic for all route types
*
*/

// import graphql components
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;

//
const UserType = require('./user_type');

// Define RootQueries for GraphQL
const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    currentUser: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    }

  }
});

module.exports = RootQueryType;
