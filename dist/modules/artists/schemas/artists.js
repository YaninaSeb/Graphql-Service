"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefArtists = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefArtists = (0, apollo_server_1.gql) `
    type Artist {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        birthDate: String
        birthPlace: String
        country: String
        bands: [Band]
        instruments: [String]
    }

    input CreateArtistInput {
        firstName: String!
        secondName: String!
        middleName: String!
        birthDate: String
        birthPlace: String
        country: String!
        bandsIds: [ID]
        instruments: [String]
    }

    input UpdateArtistInput {
        id: ID!
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
        updateArtist(updateArtistInput: UpdateArtistInput): Artist!
        deleteArtist(id: ID!): DELETE
    }

`;
