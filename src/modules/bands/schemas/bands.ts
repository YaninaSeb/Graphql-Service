import { gql } from "apollo-server";

export const typeDefBands = gql `
    type Band {
        id: ID!
        name: String
        origin: String
        members: [Member]
        website: String
        genres: [Genre]
    }

    type Member {
        artist: String
        instrument: String
        years: String
    }

    type Query {
        band(id: ID!): Band
        bands(limit: Int, offset: Int): [Band]
    }
`

// input BandContent {
//     name: String
//     origin: String
//     members: [Member]
//     website: String
//     genres: [String]
// }

// type Mutation {
//     createBand(input: BandContent): Band
//     deleteBand(id: ID!): DEL
//     updateBand(id: ID!, input: BandContent): Band
// }
