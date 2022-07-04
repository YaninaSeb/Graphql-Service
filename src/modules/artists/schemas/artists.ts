import { gql } from "apollo-server";

export const typeDefArtists = gql `
    type Artist {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [Band]
        instruments: String
    }

    input CreateArtistInput {
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bandsIds: [ID]
        instruments: [String]
    }

    type Query {
        artist(id: ID!): Artist
        artists(limit: Int, offset: Int): [Artist]
    }

    type Mutation {
        createArtist(createArtistInput: CreateArtistInput!): Artist!
    }

`

// input ArtistContent {
    // firstName: String
    // secondName: String
    // middleName: String
    // birthDate: String
    // birthPlace: String
    // country: String
    // bandsIds: [String]
    // instruments: [String]
// }

// type Mutation {
//     createArtist(content: ArtistContent): Artist
//     deleteArtist(id: ID!): DEL
//     updateArtist(id: ID!, content: ArtistContent): Artist
// }
