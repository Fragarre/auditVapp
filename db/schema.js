const { gql } = require('apollo-server-express');

const typeDefs = gql`
# types
    type Model {
        id:ID
        CounterId: Int 
        Field1: String
    }
# inputs
    input ModelInput{
    Field1: String
    }
# Queries
    type Query {
        getModels:[Model]
    }
# Mutations
    type Mutation {
        newModel(input: ModelInput): String
    }
`;

module.exports = typeDefs;