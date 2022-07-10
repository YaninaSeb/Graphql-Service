"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefAlbums = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefAlbums = (0, apollo_server_1.gql) `
    type Album {
        id: ID!
        name: String
        released: Int
        artists: [Artist]
        bands: [Band]
        tracks: [Track]
        genres: [Genre]
        image: String
    }

    type DELETE {
        acknowledged: Boolean
        deletedCount: Int
    }

    input CreateAlbumInput {
        name: String
        released: Int
        artistsIds: [ID]
        bandsIds: [ID]
        trackIds: [ID]
        genresIds: [ID]
        image: String
    }

    input UpdateAlbumInput {
        id: ID!
        name: String
        released: Int
        artistsIds: [ID]
        bandsIds: [ID]
        trackIds: [ID]
        genresIds: [ID]
        image: String
    }

    type Query {
        album(id: ID!): Album
        albums(limit: Int, offset: Int): [Album]
    }

    type Mutation {
        createAlbum(createAlbumInput: CreateAlbumInput): Album!
        updateAlbum(updateAlbumInput: UpdateAlbumInput): Album!
        deleteAlbum(id: ID!): DELETE
    }
`;
