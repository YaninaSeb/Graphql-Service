import { gql } from "apollo-server";

export const typeDefUsers = gql `
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
`
