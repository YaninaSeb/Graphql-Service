import { gql } from "apollo-server";

export const typeDefGenres = gql `
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

`
