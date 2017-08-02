// Setup express
const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();

const Schema = require('./schema/schema');

// intercept graphql requests
app.use('/graphql', expressGraphQL({
	graphiql: true,
	schema: Schema
}))

// Listen on port 4000
app.listen(4000, () => console.log('app listening'));