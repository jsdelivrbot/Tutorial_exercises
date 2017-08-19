/**
*
*
* @summary: GraphQL model for user
*
*/

// Required GraphQL components
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

// User GraphQL objects
const UserType = new GraphQLObjectType({

  name: 'UserType',
  fields: {
    id: { type: GraphQLID },
    email: { type: GraphQLString }
  }

});

module.exports = UserType;
