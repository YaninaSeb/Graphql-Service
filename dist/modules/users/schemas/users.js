"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefUsers = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefUsers = (0, apollo_server_1.gql) `
    type User {
        id: ID!
        firstName: String
        secondName: String
        password: String
        email: String!
    }

    input RegisterUserInput {
        firstName: String
        lastName: String
        password: String!
        email: String!
    }

    type Login {
        token: String
    }

    type Query {
        user(id: ID!): User
        jwt(email: String!, password: String!): Login
    }

    type Mutation {
        register(registerUserInput: RegisterUserInput!): User
    }
`;
