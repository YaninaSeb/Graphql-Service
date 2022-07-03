import { gql } from "apollo-server";

export const typeDefGenres = gql `
    type Genre {
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

`

// input GenreContent {
//     name: String
//     description: String
//     country: String
//     year: Int
// }

// type Mutation {
//     createGenre(content: GenreContent): Genre
//     deleteGenre(id: ID!): DEL
//     updateGenre(id: ID!, content: GenreContent): Genre
// }
