const { ApolloServer, gql } = require('apollo-server-express'); // Usa apollo-server-express
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const express = require('express');

// Upload Swagger file
const swaggerDocument = YAML.load('./swagger.yaml');

// Create the Apollo server
const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () => 'Hello World from GraphQL in JavaScript',
    },
};

const server = new ApolloServer({ typeDefs, resolvers });

// Create Express Server
const app = express();

// Serving Swagger documentation in /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Start Apollo Server and connect to Express
async function startServer() {
    await server.start();
    server.applyMiddleware({ app });

    // Start the Express server
    app.listen(4000, () => {
        console.log('Server running in: http://localhost:4000' + server.graphqlPath);
        console.log('Swagger documentation in: http://localhost:4000/api-docs');
    });
}

startServer();
