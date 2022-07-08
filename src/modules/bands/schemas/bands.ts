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
        artist: ID!
        instrument: String
        years: [String]
    }

    input CreateBandInput {
        name: String
        origin: String
        membersIds: [ID]
        website: String
        genresIds: [ID]
    }

    input UpdateBandInput {
        id:ID!
        name: String
        origin: String
        membersIds: [ID]
        website: String
        genresIds: [ID]
    }

    type Query {
        band(id: ID!): Band
        bands(limit: Int, offset: Int): [Band]
    }

    type Mutation {
        createBand(createBandInput: CreateBandInput): Band!
        updateBand(updateBandInput: UpdateBandInput): Band!
        deleteBand(id: ID!): DELETE
    }
`
