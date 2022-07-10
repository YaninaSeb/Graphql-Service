"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefBands = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefBands = (0, apollo_server_1.gql) `
    type Band {
        id: ID!
        name: String
        origin: String
        members: [Member]
        website: String
        genres: [Genre]
    }

    type Member {
        id: ID!
        firstName: String
        secondName: String
        middleName: String
        instrument: String
        years: [String]
    }

    input MemberInput {
        artist: ID!
        instrument: String
        years: [String]
    }

    input CreateBandInput {
        name: String
        origin: String
        members: [MemberInput]
        website: String
        genresIds: [ID]
    }

    input UpdateBandInput {
        id:ID!
        name: String
        origin: String
        members: [ID]
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
`;
