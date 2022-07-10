"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefGenres = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefGenres = (0, apollo_server_1.gql) `
    type Genre {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }

    input CreateGenreInput {
        name: String
        description: String
        country: String
        year: Int
    }

    input UpdateGenreInput {
        id: ID!
        name: String
        description: String
        country: String
        year: Int
    }

    type Query {
        genre(id: ID!): Genre
        genres(limit: Int, offset: Int): [Genre]
    }

    type Mutation {
        createGenre(createGenreInput: CreateGenreInput): Genre!
        updateGenre(updateGenreInput: UpdateGenreInput): Genre!
        deleteGenre(id:ID!): DELETE
    }

`;
