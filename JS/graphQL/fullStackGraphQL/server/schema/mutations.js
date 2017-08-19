/**
*
*
* @summary: Define logic for GraphQL mutatations
*
*/

// Import GraphQL components
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString } = graphql;

// Import GraphQL user types
const UserType = require('./types/user_type');

// Import passport auth services
const AuthService = require('../services/auth');


const mutation = new GraphQLObjectType({

  name: 'Mutation',
  fields: {

    // Handle signup mutation
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        return AuthService.signup({ email: args.email, password: args.password, req: req });
      }
    },

    // Handle logout logic
    logout: {
      type: UserType,
      resolve(parentValue, {}, req) {
        const user = req.user;
        req.logout();
        return user;
      }
    },

    // Handle signin
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        return AuthService.login({ email: args.email, password: args.password, req });
      }
    }

  }

});

module.exports = mutation
