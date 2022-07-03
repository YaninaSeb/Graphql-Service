import { gql } from "apollo-server";

export const typeDefUsers = gql `
    type User {
        id: ID!
        firstName: String
        secondName: String
        password: String
        email: String!
    }

    type Query {
        user(id: ID!): User
    }

`

// input UserContent {
//     firstName: String
//     lastName: String
//     password: String
//     email: String
// }

// type Mutation {
//     register(register: String, content: UserContent): User
// }
