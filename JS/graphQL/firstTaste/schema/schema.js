/**
 *
 * @summary: GraphQL schema
 *
 */

const graphql = require('graphql');
const _ = require('lodash');
const axios = require('axios');

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLList, GraphQLNonNull } = graphql

/* SCHEMA TYPES
==============*/

/**
 *
 * @summary: Company Type
 *
 */
const CompanyType = new GraphQLObjectType({
	name: 'Company',
	fields: () => ({

		id: {type: GraphQLString} ,
		name: {type: GraphQLString},
		description: {type: GraphQLString},

		users: {
			type: new GraphQLList(UserType),
			resolve(parentValue) {
				return axios.get(`http://localhost:3000/companies/${parentValue.id}/users`)
										.then(response => response.data);
			}
		}
	})
});

/**
 *
 * @summary: User Type
 *
 */
const UserType = new GraphQLObjectType({
	name: 'User',
	fields: () => ({

		id: {type: GraphQLString} ,
		firstName: {type: GraphQLString},
		age: {type: GraphQLInt},

		company: {
			type: CompanyType,
			resolve(parentValue, args) {
				return axios.get(`http://localhost:3000/companies/${parentValue.companyId}`)
				     .then(response => {
							 return response.data
							});
			}
		}
	})
});

/* ============== */

/* QUERIES
==========*/

// Define root query for detailed requests
const rootQuery = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {

		user: {
			type: UserType,
			args: { id: { type: GraphQLString } },
			resolve(parentValue, args) {
				return resolveGraphQuery(args);
			}
		},

		company: {
			type: CompanyType,
			args: {id: { type: GraphQLString }},
			resolve(parentValue, args) {
				return axios.get(`http://localhost:3000/companies/${args.id}`)
							      .then(response => response.data);
			}
		}
	}
});


// resolve query from id provided
const resolveGraphQuery = (args) => {
	return axios.get(`http://localhost:3000/users/${args.id}`)
	            .then(response => response.data );
}

/* MUTATIONS
============*/

const mutation = new GraphQLObjectType({
	name: 'Mutation',
	fields: {

		addUser: {
			type: UserType,
			args: {
				firstName: { type: new GraphQLNonNull(GraphQLString) },
				age: { type: new GraphQLNonNull(GraphQLInt) },
				companyId: { type: GraphQLString }
			 },
			resolve(parentValue, { firstName, age }) {
				return axios.post(`http://localhost:3000/users`, { firstName, age })
										.then(response => { console.log('response is ', response.data); return response.data });
			}
		},

		deleteUser: {
			type: UserType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLString) }
			},
			resolve(parentValue, { id }) {
				return axios.delete(`http://localhost:3000/users/${id}`)
							      .then(response => {
											console.log('the deleted record is ', response.data);
											return response.data;
										})
			}
		},

		updateUser: {
			type: UserType,
			args: {
				id: { type: new GraphQLNonNull(GraphQLString) },
				firstName: { type: GraphQLString },
				companyId: { type: GraphQLString },
				age: { type: GraphQLString }
			},
			resolve(parentValue, args) {
				return axios.patch(`http://localhost:3000/users/${args.id}`, args)
				            .then(response => response.data);
			}
		}


	}
})

module.exports = new GraphQLSchema({
	query: rootQuery,
	mutation: mutation
})
